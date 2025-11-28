import { PrismaClient } from '@/generated/prisma/client';
import { RoleCreateInput } from '@/generated/prisma/models/Role';

export async function seedRole(prisma: PrismaClient) {
  const roles: RoleCreateInput[] = [
    {
      name: 'admin',
      description: 'System administrator',
    },
    {
      name: 'manager',
      description: 'Department manager',
    },
    {
      name: 'staff',
      description: 'Staff level',
    },
    {
      name: 'guest',
      description: 'Guest user',
    },
  ];

  const [admin, manager, staff, guest] = await Promise.all(
    roles.map((role) => prisma.role.create({ data: role })),
  );

  // SEED SELF-LINK FOR EACH ROLE (depth = 0)
  const rolesToSeed = [admin, manager, staff, guest];
  for (const roleToSeed of rolesToSeed) {
    await prisma.roleClosure.create({
      data: {
        ancestorId: roleToSeed.id,
        descendantId: roleToSeed.id,
        depth: 0,
      },
    });
  }

  // ADD HIERARCHICAL RELATIONSHIP (admin → manager → staff)
  await addParent(prisma, admin.id, manager.id); // admin → manager
  await addParent(prisma, manager.id, staff.id); // manager → staff
  //   await addParent(prisma, staff.id, guest.id);  // staff → guest

  console.log(`   ✓ Seeded ${roles.length} roles`);
}

/**
 * Helper: Seed quan hệ cha–con theo closure table
 * -> y như logic service addParentToRole trong hệ thống thực
 */
async function addParent(
  prisma: PrismaClient,
  childId: string,
  parentId: string,
) {
  if (childId === parentId) throw new Error('Cannot parent itself');

  // cycle detection
  const isDescendant = await prisma.roleClosure.findUnique({
    where: {
      ancestorId_descendantId: { ancestorId: childId, descendantId: parentId },
    },
  });
  if (isDescendant) {
    throw new Error('Cycle detected');
  }

  // Get all ancestors of parent
  const parentAncestors = await prisma.roleClosure.findMany({
    where: { descendantId: parentId },
  });

  // Get all descendants of child
  const childDescendants = await prisma.roleClosure.findMany({
    where: { ancestorId: childId },
  });

  // Insert closure rows
  for (const pa of parentAncestors) {
    for (const cd of childDescendants) {
      await prisma.roleClosure.create({
        data: {
          ancestorId: pa.ancestorId,
          descendantId: cd.descendantId,
          depth: pa.depth + 1 + cd.depth,
        },
      });
    }
  }
}

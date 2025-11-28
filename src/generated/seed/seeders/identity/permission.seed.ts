import { PrismaClient } from '@/generated/prisma/client';
import { PermissionCreateInput } from '@/generated/prisma/models/Permission';

export async function seedPermission(
    prisma: PrismaClient,
) {
    const admin = await prisma.role.findUnique({ where: { name: 'admin' } });
    const manager = await prisma.role.findUnique({ where: { name: 'manager' } });
    const staff = await prisma.role.findUnique({ where: { name: 'staff' } });
    // const guest = await prisma.role.findUnique({ where: { name: 'guest' } });

    if (!admin) throw new Error('Admin role not found');
    if (!manager) throw new Error('Manager role not found');
    if (!staff) throw new Error('Staff role not found');

  const permissionsToSeed: PermissionCreateInput[] = [
    { name: 'read.user' },
    { name: 'update.user' },
    { name: 'delete.user' },
    { name: 'read.role' },
    { name: 'update.role' },
    { name: 'delete.role' },
    { name: 'read.permission' },
    { name: 'update.permission' },
    { name: 'delete.permission' },
  ];

  const permissions = await prisma.permission.createManyAndReturn({
    data: permissionsToSeed,
  });

  // ASSIGN PERMISSIONS TO ROLE
  // ADMIN HAS ALL PERMISSIONS
  await prisma.rolePermission.createMany({
    data: permissions.map((p) => ({
      roleId: admin.id,
      permissionId: p.id,
    })),
  });

  // manager has only partial permissions
  await prisma.rolePermission.createMany({
    data: permissions
      .filter((p) =>
        ['read.user', 'read.order', 'update.order'].includes(p.name),
      )
      .map((p) => ({
        roleId: manager.id,
        permissionId: p.id,
      })),
  });

  // staff has less permissions
  await prisma.rolePermission.createMany({
    data: permissions
      .filter((p) => ['read.order'].includes(p.name))
      .map((p) => ({
        roleId: staff.id,
        permissionId: p.id,
      })),
  });

  console.log('Seed completed.');
}

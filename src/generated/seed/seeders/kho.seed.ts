import { PrismaClient } from '@/generated/prisma/client';

export async function seedKho(prisma: PrismaClient) {
  const khos = [
    {
      maKho: 'KHO-HN',
      tenKho: 'Kho Hà Nội',
      diaChi: '123 Đường Láng, Đống Đa, Hà Nội',
      dienTich: 1500.5,
      kinhDo: 105.8342,
      viDo: 21.0278,
      tenTruongKho: 'Nguyễn Văn An',
      sdtTruongKho: '0912345678',
    },
    {
      maKho: 'KHO-HCM',
      tenKho: 'Kho Hồ Chí Minh',
      diaChi: '456 Nguyễn Huệ, Quận 1, TP.HCM',
      dienTich: 2000.0,
      kinhDo: 106.6297,
      viDo: 10.8231,
      tenTruongKho: 'Trần Thị Bình',
      sdtTruongKho: '0923456789',
    },
    {
      maKho: 'KHO-DN',
      tenKho: 'Kho Đà Nẵng',
      diaChi: '789 Lê Duẩn, Hải Châu, Đà Nẵng',
      dienTich: 1200.0,
      kinhDo: 108.2208,
      viDo: 16.0544,
      tenTruongKho: 'Lê Văn Cường',
      sdtTruongKho: '0934567890',
    },
    {
      maKho: 'KHO-CT',
      tenKho: 'Kho Cần Thơ',
      diaChi: '321 Mậu Thân, Ninh Kiều, Cần Thơ',
      dienTich: 800.0,
      kinhDo: 105.7879,
      viDo: 10.0452,
      tenTruongKho: 'Phạm Thị Dung',
      sdtTruongKho: '0945678901',
    },
    {
      maKho: 'KHO-HP',
      tenKho: 'Kho Hải Phòng',
      diaChi: '555 Lạch Tray, Ngô Quyền, Hải Phòng',
      dienTich: 1000.0,
      kinhDo: 106.6822,
      viDo: 20.8449,
      tenTruongKho: 'Hoàng Văn Em',
      sdtTruongKho: '0956789012',
    },
  ];

  for (const kho of khos) {
    await prisma.kho.create({
      data: {
        ...kho,
        createdBy: 'system',
      },
    });
  }

  console.log(`   ✓ Seeded ${khos.length} warehouses`)
}

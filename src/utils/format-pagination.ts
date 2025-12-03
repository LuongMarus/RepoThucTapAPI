import { BasePagination } from '@/types/pagination';

export function buildPagination(
  page: number,
  limit: number,
  total: number,
): BasePagination {
  const totalPages = Math.ceil(total / limit);
  return {
    page,
    limit,
    total,
    totalPages,
    hasNext: page < totalPages,
    hasPrev: page > 1,
  };
}

import z from 'zod/v4';
import {
  findAllSuppliersSchema,
  findSupplierByIdSchema,
  createSupplierSchema,
  updateSupplierSchema,
} from '../validations';

export type FindAllSuppliersDto = z.infer<typeof findAllSuppliersSchema>;
export type FindSupplierByIdDto = z.infer<typeof findSupplierByIdSchema>;
export type CreateSupplierDto = z.infer<typeof createSupplierSchema>;
export type UpdateSupplierDto = z.infer<typeof updateSupplierSchema>;

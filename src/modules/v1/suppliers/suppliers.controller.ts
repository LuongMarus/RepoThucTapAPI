import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UsePipes,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
  ApiQuery,
} from '@nestjs/swagger';

import { ZodValidationPipe } from '@/common/pipes';

import { SuppliersService } from './suppliers.service';

import {
  findAllSuppliersSchema,
  findSupplierByIdSchema,
  createSupplierSchema,
  updateSupplierSchema,
} from './validations';

import type { ResponseController } from '@/types/response-controller';
import type {
  CreateSupplierDto,
  FindAllSuppliersDto,
  FindSupplierByIdDto,
  UpdateSupplierDto,
} from './dto';

@Controller({ path: 'suppliers', version: '1' })
@ApiTags('Suppliers')
export class SuppliersController {
  constructor(private suppliersService: SuppliersService) {}

  @Get()
  @UsePipes(
    new ZodValidationPipe<FindAllSuppliersDto, FindAllSuppliersDto>({
      query: findAllSuppliersSchema,
    }),
  )
  async findAll(
    @Query() query: FindAllSuppliersDto,
  ): Promise<ResponseController<unknown>> {
    const result = await this.suppliersService.findAll(query);
    return {
      message: 'Suppliers fetched successfully',
      metadata: result,
    };
  }

  @Get(':supplierId')
  @UsePipes(
    new ZodValidationPipe<FindSupplierByIdDto, FindSupplierByIdDto>({
      param: findSupplierByIdSchema.shape.supplierId,
    }),
  )
  async findOneById(
    @Param('supplierId') supplierId: string,
  ): Promise<ResponseController<unknown>> {
    const result = await this.suppliersService.findOneById(supplierId);
    return {
      message: 'Supplier fetched successfully',
      metadata: result,
    };
  }

  @Post()
  @UsePipes(
    new ZodValidationPipe<CreateSupplierDto, CreateSupplierDto>({
      body: createSupplierSchema,
    }),
  )
  async createSupplier(
    @Body() body: CreateSupplierDto,
  ): Promise<ResponseController<unknown>> {
    const result = await this.suppliersService.createSupplier(body);
    return {
      message: 'Supplier created successfully',
      metadata: result,
    };
  }

  @Patch(':supplierId')
  @UsePipes(
    new ZodValidationPipe<
      FindSupplierByIdDto & UpdateSupplierDto,
      FindSupplierByIdDto & UpdateSupplierDto
    >({
      param: findSupplierByIdSchema.shape.supplierId,
      body: updateSupplierSchema,
    }),
  )
  async updateSupplier(
    @Param('supplierId') supplierId: string,
    @Body() body: UpdateSupplierDto,
  ): Promise<ResponseController<unknown>> {
    const result = await this.suppliersService.updateSupplier(supplierId, body);
    return {
      message: 'Supplier updated successfully',
      metadata: result,
    };
  }

  @Delete(':supplierId')
  @UsePipes(
    new ZodValidationPipe<FindSupplierByIdDto, FindSupplierByIdDto>({
      param: findSupplierByIdSchema.shape.supplierId,
    }),
  )
  async deleteSupplier(
    @Param('supplierId') supplierId: string,
  ): Promise<ResponseController<unknown>> {
    const result = await this.suppliersService.deleteSupplier(supplierId);
    return {
      message: 'Supplier deleted successfully',
      metadata: result,
    };
  }

  @Patch(':supplierId/restore')
  @UsePipes(
    new ZodValidationPipe<FindSupplierByIdDto, FindSupplierByIdDto>({
      param: findSupplierByIdSchema.shape.supplierId,
    }),
  )
  async restoreSupplier(
    @Param('supplierId') supplierId: string,
  ): Promise<ResponseController<unknown>> {
    const result = await this.suppliersService.restoreSupplier(supplierId);
    return {
      message: 'Supplier restored successfully',
      metadata: result,
    };
  }
}

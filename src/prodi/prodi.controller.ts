import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProdiService } from './prodi.service';
import { Prodi } from './prodi.entity';

@Controller('prodi')
export class ProdiController {
  constructor(private readonly prodiService: ProdiService) {}

  @Get()
  getAllProdi(): Promise<Prodi[]> {
    return this.prodiService.getAllProdi();
  }

  @Post()
  addProdi(@Body() prodiData: Prodi): Promise<Prodi> {
    return this.prodiService.addProdi(prodiData);
  }

  @Get(':id')
  getProdiById(@Param('id') id: number): Promise<Prodi> {
    return this.prodiService.getProdiById(Number(id));
  }

  @Put(':id')
  updateProdi(@Param('id') id: number, @Body() prodiData: Partial<Prodi>): Promise<Prodi> {
    return this.prodiService.updateProdi(Number(id), prodiData);
  }

  @Delete(':id')
  deleteProdi(@Param('id') id: number): Promise<void> {
    return this.prodiService.deleteProdi(Number(id));
  }
}

import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { KelasService } from './kelas.service';
import { Kelas } from './kelas.entity';

@Controller('kelas')
export class KelasController {
  constructor(private readonly kelasService: KelasService) {}

  @Get()
  getAllKelas(): Promise<Kelas[]> {
    return this.kelasService.getAllKelas();
  }

  @Post()
  addKelas(@Body() kelasData: Kelas): Promise<Kelas> {
    return this.kelasService.addKelas(kelasData);
  }

  @Get(':id')
  getKelasById(@Param('id') id: number): Promise<Kelas> {
    return this.kelasService.getKelasById(Number(id));
  }

  @Put(':id')
  updateKelas(@Param('id') id: number, @Body() kelasData: Partial<Kelas>): Promise<Kelas> {
    return this.kelasService.updateKelas(Number(id), kelasData);
  }

  @Delete(':id')
  deleteKelas(@Param('id') id: number): Promise<void> {
    return this.kelasService.deleteKelas(Number(id));
  }
}

import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { MahasiswaService } from './mahasiswa.service';
import { Mahasiswa } from './mahasiswa.entity';

@Controller('mahasiswa')
export class MahasiswaController {
  constructor(private readonly mahasiswaService: MahasiswaService) {}

  @Get()
  getAllMahasiswa(): Mahasiswa[] {
    return this.mahasiswaService.getAllMahasiswa();
  }

  @Post()
  addMahasiswa(@Body() mahasiswa: Mahasiswa): Mahasiswa {
    return this.mahasiswaService.addMahasiswa(mahasiswa);
  }

  @Get(':id')
  getMahasiswaById(@Param('id') id: number): Mahasiswa | { message: string } {
    const mahasiswa = this.mahasiswaService.getMahasiswaById(Number(id));
    return mahasiswa || { message: 'Mahasiswa tidak ditemukan' };
  }
  
  @Put(':id')
  updateMahasiswa(@Param('id') id: number, @Body() mahasiswa: Mahasiswa): Mahasiswa | { message: string } {
    const updated = this.mahasiswaService.updateMahasiswa(Number(id), mahasiswa);
    return updated || { message: 'Mahasiswa tidak ditemukan atau gagal diperbarui' };
  }
  

  @Delete(':id')
  deleteMahasiswa(@Param('id') id: number): void {
    this.mahasiswaService.deleteMahasiswa(Number(id));
  }
}

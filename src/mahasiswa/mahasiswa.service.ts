import { Injectable } from '@nestjs/common';
import { Mahasiswa } from './mahasiswa.entity';

@Injectable()
export class MahasiswaService {
  private mahasiswas: Mahasiswa[] = [];


  getAllMahasiswa(): Mahasiswa[] {
    return this.mahasiswas;
  }

 
  addMahasiswa(mahasiswa: Mahasiswa): Mahasiswa {
    mahasiswa.id = this.mahasiswas.length + 1;
    this.mahasiswas.push(mahasiswa);
    return mahasiswa;
  }

 
  getMahasiswaById(id: number): Mahasiswa | null {
    return this.mahasiswas.find(m => m.id === id) || null;
  }
  

  updateMahasiswa(id: number, updatedMahasiswa: Mahasiswa): Mahasiswa | null {
    const index = this.mahasiswas.findIndex(m => m.id === id);
    if (index > -1) {
      this.mahasiswas[index] = { ...this.mahasiswas[index], ...updatedMahasiswa };
      return this.mahasiswas[index];
    }
    return null;
  }
  

  deleteMahasiswa(id: number): void {
    this.mahasiswas = this.mahasiswas.filter(m => m.id !== id);
  }
}

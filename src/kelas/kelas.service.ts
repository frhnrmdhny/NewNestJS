import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Kelas } from './kelas.entity';

@Injectable()
export class KelasService {
  constructor(
    @InjectRepository(Kelas)
    private kelasRepository: Repository<Kelas>,
  ) {}

  getAllKelas(): Promise<Kelas[]> {
    return this.kelasRepository.find();
  }

  addKelas(kelasData: Kelas): Promise<Kelas> {
    return this.kelasRepository.save(kelasData);
  }

  getKelasById(id: number): Promise<Kelas | null> {
    return this.kelasRepository.findOneBy({ id });
  }

  async updateKelas(id: number, updatedKelas: Partial<Kelas>): Promise<Kelas | null> {
    await this.kelasRepository.update(id, updatedKelas);
    return this.kelasRepository.findOneBy({ id });
  }

  async deleteKelas(id: number): Promise<void> {
    await this.kelasRepository.delete(id);
  }
}

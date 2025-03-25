import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Prodi } from './prodi.entity';

@Injectable()
export class ProdiService {
  constructor(
    @InjectRepository(Prodi)
    private prodiRepository: Repository<Prodi>,
  ) {}

 
  getAllProdi(): Promise<Prodi[]> {
    return this.prodiRepository.find();
  }

  
  addProdi(prodiData: Prodi): Promise<Prodi> {
    return this.prodiRepository.save(prodiData);
  }

  
  async getProdiById(id: number): Promise<Prodi> {
    const prodi = await this.prodiRepository.findOneBy({ id });
    if (!prodi) {
      throw new NotFoundException(`Prodi dengan ID ${id} tidak ditemukan`);
    }
    return prodi;
  }

 
  async updateProdi(id: number, updatedProdi: Partial<Prodi>): Promise<Prodi> {
    await this.prodiRepository.update(id, updatedProdi);
    const prodi = await this.prodiRepository.findOneBy({ id });
    if (!prodi) {
      throw new NotFoundException(`Prodi dengan ID ${id} tidak ditemukan`);
    }
    return prodi;
  }

 
  async deleteProdi(id: number): Promise<void> {
    const result = await this.prodiRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Prodi dengan ID ${id} tidak ditemukan`);
    }
  }
}

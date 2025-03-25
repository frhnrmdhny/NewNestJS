import { Module } from '@nestjs/common';
import { ProdiController } from './prodi.controller';
import { ProdiService } from './prodi.service';

@Module({
  controllers: [ProdiController],
  providers: [ProdiService]
})
export class ProdiModule {}

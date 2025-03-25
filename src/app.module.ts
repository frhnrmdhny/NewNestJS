import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KelasModule } from './kelas/kelas.module';
import { ProdiModule } from './prodi/prodi.module';
import { Kelas } from './kelas/kelas.entity';
import { Prodi } from './prodi/prodi.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'university.db',
      entities: [Kelas, Prodi],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Kelas, Prodi]),
    KelasModule,
    ProdiModule,
  ],
})
export class AppModule {}

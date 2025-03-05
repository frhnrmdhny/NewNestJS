import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { MahasiswaModule } from './mahasiswa/mahasiswa.module';

@Module({
  imports: [BookModule, MahasiswaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

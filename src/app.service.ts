import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Farhan Ramadhany - 40622100101!';
  }
}

import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './book.entity';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  // Mendapatkan semua buku
  @Get()
  getAllBooks(): Book[] {
    return this.bookService.getAllBooks();
  }

  // Menambahkan buku baru
  @Post()
  addBook(@Body() book: Book): Book {
    return this.bookService.addBook(book);
  }

  // Mendapatkan buku berdasarkan ID dengan konversi ke number
  @Get(':id')
  getBookById(@Param('id') id: string): Book {
    return this.bookService.getBookById(+id); // Konversi ke number
  }

  // Mengupdate buku berdasarkan ID dengan konversi ke number
  @Put(':id')
  updateBook(@Param('id') id: string, @Body() book: Book): Book {
    return this.bookService.updateBook(+id, book); // Konversi ke number
  }

  // Menghapus buku berdasarkan ID dengan konversi ke number
  @Delete(':id')
  deleteBook(@Param('id') id: string): void {
    this.bookService.deleteBook(+id); // Konversi ke number
  }
}

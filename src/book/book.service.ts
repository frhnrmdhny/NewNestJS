import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './book.entity';

@Injectable()
export class BookService {
  private books: Book[] = [];

  // Mendapatkan semua buku
  getAllBooks(): Book[] {
    return this.books;
  }

  // Menambahkan buku baru
  addBook(book: Book): Book {
    book.id = this.books.length + 1;
    this.books.push(book);
    return book;
  }

  // Mendapatkan buku berdasarkan ID dengan pengecekan error
  getBookById(id: number): Book {
    const book = this.books.find(book => book.id === id);
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return book;
  }

  // Mengupdate buku berdasarkan ID dengan pengecekan error
  updateBook(id: number, updatedBook: Book): Book {
    const bookIndex = this.books.findIndex(book => book.id === id);
    if (bookIndex === -1) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    this.books[bookIndex] = { ...this.books[bookIndex], ...updatedBook };
    return this.books[bookIndex];
  }

  // Menghapus buku berdasarkan ID dengan pengecekan error
  deleteBook(id: number): void {
    const bookIndex = this.books.findIndex(book => book.id === id);
    if (bookIndex === -1) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    this.books.splice(bookIndex, 1);
  }
}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {Book} from '../models/book.model';
import {Subscription} from 'rxjs';
import {BooksService} from '../services/books.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {

  books: Book[];
  booksSubscription: Subscription;

  constructor(private booksService: BooksService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.booksSubscription = this.booksService.bookSubject.subscribe(
      (books: Book[]) => {
        this.books = books;
      }
    );
    this.booksService.getBooks();
    this.booksService.emitBooks();
  }

  onNewBook(): void {
    this.router.navigate(['/books', 'new']);
  }

  onDeleteBook(book: Book): void {
    this.booksService.removeBook(book);
  }

  onViewBook(id: number): void {
    this.router.navigate(['/books', 'view', id]);
  }

  ngOnDestroy(): void {
    this.booksSubscription.unsubscribe();
  }
}

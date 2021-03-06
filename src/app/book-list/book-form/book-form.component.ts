import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BooksService} from '../../services/books.service';
import {Router} from '@angular/router';
import {Book} from '../../models/book.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookFrom: FormGroup;
  fileIsUploading = false;
  fileUrl: string;
  fileUploaded = false;

  constructor(private formBuiler: FormBuilder,
              private booksService: BooksService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.bookFrom = this.formBuiler.group({
      title: ['', Validators.required],
      author: ['', Validators.required]
    });
  }

  onSaveBook(): void {
    const title = this.bookFrom.get('title').value;
    const author = this.bookFrom.get('author').value;
    const newBook = new Book(title, author);
    if (this.fileUrl && this.fileUrl !== '') {
      newBook.photo = this.fileUrl;
    }
    this.booksService.createNewBook(newBook);
    this.router.navigate(['/books']);
  }

  onUploadFile(file: File): void {
    this.fileIsUploading = true;
    this.booksService.uploadFile(file).then(
      (url: string) => {
        this.fileUrl = url;
        this.fileIsUploading = false;
        this.fileUploaded = true;
      }
    );
  }

  detectFiles(event): void {
    this.onUploadFile(event.target.files[0]);
  }
}

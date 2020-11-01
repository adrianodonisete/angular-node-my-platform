import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    baseUrl = 'http://localhost:3001/products';

    constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

    read(): Observable<Product[]> {
        return this.http.get<Product[]>(this.baseUrl).pipe(
            map(obj => obj),
            catchError(e => this.errorHandler(e))
        );
    }

    errorHandler(e: any): Observable<any> {
        this.showMessage('Ocorreu um erro!', true);
        return EMPTY;
    }

    showMessage(msg: string, isError: boolean = false): void {
        console.log(msg, isError);

        this.snackBar.open(msg, 'X', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: isError ? ['msg-error'] : ['msg-success'],
        });
    }
}


// map(obj => {
//     console.log(obj);
//     return obj;
// })
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product.model';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    baseUrl: string = 'http://localhost:3001/products';
    appSystax: string = 'http://www.appsystax.com.br/platform/refresh-token';
    appSystaxProd: string = 'https://app.systax.com.br/platform/refresh-token';

    constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

    read(): Observable<Product[]> {
        return this.http.get<Product[]>(this.baseUrl).pipe(
            map(obj => {
                console.log(obj);
                return obj;
            }),
            catchError(e => this.errorHandler(e))
        );
    }

    readSystax(): Observable<Product[]> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                token:
                    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsdW1lbi1qd3QiLCJzdWIiOiJ7XCJ1c2VybmFtZVwiOlwiYWRyaWFuby5hcGljZm1cIixcImlkX2NsaWVudGVcIjpcIjExNjU3XCJ9IiwiaWF0IjoxNjA1MTg4ODg2LCJleHAiOjE2MDUxOTI0ODYsInVzdWFyaW8iOiIyMDAyNSIsImNsaWVudGVzIjpbIjExNjU3Il19.tRSgnoAHGSZ0EJaYGQ35oczWTmmqwoBT7VkY8vVdnEU',
            }),
        };
        return this.http.get<Product[]>(this.appSystax, httpOptions).pipe(
            map(obj => {
                console.log(obj);
                return obj;
            }),
            catchError(e => this.errorHandler(e))
        );
    }

    errorHandler(e: any): Observable<any> {
        console.log({a: e.status, b: e});

        this.showMessage('Ocorreu um erro!', true);
        return Observable.throw(new Error(e.status));
    }

    showMessage(msg: string, isError: boolean = false): void {
        console.log(msg, isError);

        // this.snackBar.open(msg, 'X', {
        //   duration: 3000,
        //   horizontalPosition: 'right',
        //   verticalPosition: 'top',
        //   panelClass: isError ? ['msg-error'] : ['msg-success'],
        // });
    }
}

// map(obj => {
//     console.log(obj);
//     return obj;
// })

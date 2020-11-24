import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Product } from './product.model';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError, delay, tap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class ProductService {
	baseUrl: string = 'http://localhost:3001/products';
	appSystax: string = 'https://app.systax.com.br/platform/refresh-token';

	constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

	read(): Observable<Product[]> {
		let count = 0;
		return this.http
			.get<Product[]>(this.baseUrl, {
				headers: {
					token: 'teste',
				},
				observe: 'body',
				params: {
					'filter[0]': ['email', 'systax.com'],
				},
			})
			.pipe(
				delay(3000),
				map(obj => {
					obj = obj.map(a => {
						a.total = a.id * 2;
						return a;
					});
					return obj;
				}),
				map(obj => obj.filter(a => a.id % 2 == 0)),
        catchError(e => {
          console.log(e)
          return EMPTY;
        })
			);
	}

	readSystax(): Observable<Product[]> {
		const a = new HttpParams();
		a.append('filter', '1');

		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
				token:
					'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.' +
					'eyJpc3MiOiJsdW1lbi1qd3QiLCJzdWIiOiJ7XCJ1c2VybmFt' +
					'ZVwiOlwiYWRyaWFuby5hcGljZm1cIixcImlkX2NsaWVudGVcI' +
					'jpcIjExNjU3XCJ9IiwiaWF0IjoxNjA1MTUyMjE4LCJleHAiOjE' +
					'2MDUxNTU4MTgsInVzdWFyaW8iOiIyMDAyNSIsImNsaWVudGVzIjpbIjExNjU3Il19' +
					'.XQVD5Bn20YlZ-fr1hpE3f5HK2eLNcvRzuBiISxKx-W0',
			}),
			params: a,
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
		console.log(e);

		this.showMessage('Ocorreu um erro!', true);
		return EMPTY;
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

import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
<<<<<<< HEAD
=======
	
>>>>>>> 263849b8db8ace01ba6e7b0ce5a30d10c9618e46
	products: Product[];
	displayColumns: ['id', 'name', 'price', 'action'];

	prods$: Observable<Product[]>;

	paidShow: boolean = true;
	pendingShow: boolean = true;
	canceledShow: boolean = true;

	constructor(private productService: ProductService) {}

	ngOnInit(): void {
    this.prods$ = this.productService.read().pipe(
			tap(console.log) 
		);
	}

	ngReadSystax() {
		// this.productService.readSystax().subscribe(products => {
		//     this.products = products;
		// });
	}

	allShow() {
		this.paidShow = true;
		this.pendingShow = true;
		this.canceledShow = true;
	}

	onlyPaidShow() {
		this.paidShow = true;
		this.pendingShow = false;
		this.canceledShow = false;
	}

	onlyPendingShow() {
		this.paidShow = false;
		this.pendingShow = true;
		this.canceledShow = false;
	}

	onlyCanceledShow() {
		this.paidShow = false;
		this.pendingShow = false;
		this.canceledShow = true;
	}
}
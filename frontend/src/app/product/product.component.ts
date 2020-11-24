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
=======
    products: Product[];
    displayColumns: ['id', 'name', 'price', 'action'];
    result = 'sem conteúdo';

    constructor(private productService: ProductService) {}

    ngOnInit(): void {
        // this.productService.read().subscribe(products => {
        //     this.products = products;
        // });
        this.productService.readSystax().subscribe(res => {
            this.result = res.token;
        });
    }
>>>>>>> 9255bd1b319dce25b9e3b3f5b73820697cb59a85
}

/**
    <div>
    <div *ngFor="let p of products">
        {{ p.id }}
        <b>{{ p.name }}</b>
        {{ p.price | currency: 'BRL' }}
        <br />
        teste
    </div>
</div>
 */

import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
	selector: 'app-token',
	templateUrl: './token.component.html',
	styleUrls: ['./token.component.css'],
})
export class TokenComponent implements OnInit, OnDestroy {
	id: any;
	valor: string;

	constructor() {}

	ngOnInit(): void {
		this.valor = this.getValor();
		this.id = setInterval(() => {
			const txt = this.getValor();
			this.show(txt);
			console.log(txt);
		}, 1000);
	}

	ngOnDestroy(): void {
		if (this.id) {
			clearInterval(this.id);
		}
	}

	getValor(): string {
		return 'Agora ' + this.now();
	}

	show(txt: string) {
		this.valor = txt;
	}

	now(): string {
		const date = new Date(),
			dd = date.getDate().toString().padStart(2, '0'),
			mm = (date.getMonth() + 1).toString().padStart(2, '0'),
			yyyy = date.getFullYear().toString(),
			hh = date.getHours().toString().padStart(2, '0'),
			ii = date.getMinutes().toString().padStart(2, '0'),
			ss = date.getSeconds().toString().padStart(2, '0');
		return dd + '/' + mm + '/' + yyyy + ' ' + hh + ':' + ii + ':' + ss;
	}
}

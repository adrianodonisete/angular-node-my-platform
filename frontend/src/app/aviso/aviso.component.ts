import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-aviso',
    templateUrl: './aviso.component.html',
    styleUrls: ['./aviso.component.css'],
})
export class AvisoComponent implements OnInit {
    constructor() { }
    description: string = `véio, o bagui é loco 2`;
    price: number = 1254;

    ngOnInit(): void { }
}
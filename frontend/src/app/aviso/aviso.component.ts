import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-aviso',
    templateUrl: './aviso.component.html',
    styleUrls: ['./aviso.component.css'],
})
export class AvisoComponent implements OnInit {
    constructor() { }
    description: String = `véio, o bagui é loco`;
    price: number = 1254;

    ngOnInit(): void { }
}
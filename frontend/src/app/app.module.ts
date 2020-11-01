import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvisoComponent } from './aviso/aviso.component';
import { ProductComponent } from './product/product.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePt);

@NgModule({
    declarations: [AppComponent, AvisoComponent, ProductComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatSnackBarModule,
        HttpClientModule,
    ],
    providers: [
        {
            provide: LOCALE_ID,
            useValue: 'pt-BR',
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}

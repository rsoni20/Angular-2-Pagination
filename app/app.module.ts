import { PagerService } from './_services/pager.service';
import { DataService } from './_services/data.service';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        PagerService,
        DataService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
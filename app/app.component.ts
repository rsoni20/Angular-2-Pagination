import { PagerService } from './_services/pager.service';
import { DataService } from './_services/data.service';
import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import * as _ from 'underscore';


@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
    constructor(private http: Http, private pagerService: PagerService, private _dataService: DataService) { }

    private allItems: any[];

    pager: any = {};

    pagedItems: any[];

    ngOnInit() {

        this._dataService.getData()
            .subscribe(data => {
                this.allItems = data;
                this.setPage(1);
            });
    }

    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        this.pager = this.pagerService.getPager(this.allItems.length, page);

        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
}
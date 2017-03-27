import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

    constructor(private _http: Http) {

    }
    getData(): Observable<any> {
       return this._http.get('./dummy-data.json')
            .map((response: Response) => response.json())
            .catch(this._handleError);
    }

    private _handleError(error:any)
    {
        console.log(error);
        return Observable.throw(error);
    }
}
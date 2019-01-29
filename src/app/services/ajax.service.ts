import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class AjaxService {
    constructor(private http: HttpClient) {}
    getAtmData(){
            var date = new Date();
            var _rnd = date.getTime(); // Add parameter to prevent service caching
            console.log(_rnd);
        return this.http.get('http://localhost:55556/webapi/api/atm/GetGenContractInfo?_rnd='+_rnd+'&uri=452708&v=1');
    }
}
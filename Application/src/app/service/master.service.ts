import { Injectable } from '@angular/core';
import { City } from '../model/city';
import { Country } from '../model/country';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable()
export class MasterService {
    hostURL: string;

    constructor(private http: HttpClient) {
        this.hostURL = 'http://localhost:49295/';
    }

    public getCountryList() {
        // return [
        //     new Country('India', 1),
        //     new Country('USA', 2),
        //     new Country('Australia', 3),
        //     new Country('Brazil', 4)
        // ];
        return this.http.get(`${this.hostURL}api/master/colt`).pipe(map(response => response));
    }

    public getCityList() {
        return this.http.get(`${this.hostURL}api/master/cilt`).pipe(map(response => response));
        // return [
        //     new City('Namakkal', 1, 1),
        //     new City('Chennai', 2, 1),
        //     new City('Madurai', 3, 1),
        //     new City('Salem', 4, 1),
        //     new City('New York', 5, 2),
        //     new City('Washington D.C', 6, 2),
        //     new City('Chicago', 7, 2),
        //     new City('San Francisco', 8, 2),
        //     new City('Aydney', 9, 3),
        //     new City('Melbourne', 10, 3),
        //     new City('Adelaide', 11, 3),
        //     new City('Perth', 12, 3),
        // ];
    }

}

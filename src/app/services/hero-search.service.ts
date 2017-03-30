import {Injectable} from '@angular/core';
import {Http}       from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Hero}           from '../hero';
import {HEROES} from "../mock-heroes";
@Injectable()
export class HeroSearchService {
    constructor(private http: Http) {
    }

    search(term: string): Promise<Hero[]> {
        /*return this.http
            .get(`app/heroes/?name=${term}`)
         .map(response => response.json().data as Hero[]);*/
        return Promise.resolve(HEROES.filter(v => {
            if (v.name.indexOf(term) >= 0) {
                return v;
            }
        }));
    }
}
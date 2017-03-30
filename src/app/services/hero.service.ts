import { Injectable } from '@angular/core';
import {HEROES} from '../mock-heroes';
import {Hero} from "../hero";
import {Headers, Http} from "@angular/http";
import "rxjs/add/operator/toPromise";

@Injectable()
export class HeroService {

    private heroesUrl = 'api/heroes';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {
    }

    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
        /*return this.http.get(this.heroesUrl)
            .toPromise()
         .then(response => HEROES)
         .catch(this.handleError);*/
    }

    getHero(id: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return Promise
            .resolve(response => {
                HEROES.filter(v => {
                    if (v.id == id) return v;
                });
            })
            .catch(this.handleError);
    }

    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return Promise.resolve(response => {
            HEROES.filter(v => {
                if (v.id == hero.id) {
                    v = hero;
                    return v;
                }
            });
        })
            .catch(this.handleError);
    }

    create(name: string): Promise<Hero> {
        return this.http
            .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as Hero)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    handleError() {
    }
}
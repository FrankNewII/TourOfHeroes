import { Injectable } from '@angular/core';
import {HEROES} from '../mock-heroes';
import {Hero} from "../models/hero";
import {Headers, Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {Router} from "@angular/router";
import {DialogOverviewExampleDialog} from "../components/modal/modal.component";
import {MdDialog} from "@angular/material/material";

@Injectable()
export class HeroService {

    private heroesUrl = 'api/heroes';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http, private router: Router, private dialog: MdDialog) {
    }

    getHeroes(): any {
        return this.http.get(this.heroesUrl)
            .toPromise()
         .then(response => HEROES)
            .catch(this.handleError.bind(this));
    }

    getHero(id: number): any {
        const url = `${this.heroesUrl}/${id}`;
        return Promise
            .resolve(response => {
                HEROES.filter(v => {
                    if (v.id == id) return v;
                });
            })
            .catch(this.handleError);
    }

    update(hero: Hero): any {
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

    create(name: string): any {
        return this.http
            .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as Hero)
            .catch(this.handleError);
    }

    promise(name: string): any {
        return new Promise((resolve, reject) => {
            // то же что reject(new Error("o_O"))

            setTimeout(() => {
                resolve('hhuuu');
            }, 6000);
        })
            .then((v) => {
                console.log(v);
                return {v};
            })
            .catch(this.handleError.bind(this));
    }

    delete(id: number): Promise<void> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    handleError() {
        this.dialog.open(DialogOverviewExampleDialog);
        /*this.router.navigate(['/']);*/
    }
}
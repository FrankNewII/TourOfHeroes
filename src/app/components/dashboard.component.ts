import {Component, OnInit} from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../services/hero.service";

import {Ng2SmartTableModule} from 'ng2-smart-table';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit{
    heroes: Hero[] = [];

    public settings = {
        columns: {
            id: {
                title: 'ID'
            },
            name: {
                title: 'Full Name'
            },
            username: {
                title: 'User Name'
            },
            email: {
                title: 'Email'
            }
        }
    };

    constructor(private heroService: HeroService) {}
    ngOnInit():void {
        this.heroService.getHeroes().then(heroes => {
            var heros = heroes.map((v) => v);

            this.heroes = heros.splice(1, 5);
        });
    }
}
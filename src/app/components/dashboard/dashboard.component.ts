import {Component, OnInit} from '@angular/core';
import {Hero} from "../../models/hero";
import {HeroService} from "../../services/hero.service";

@Component({
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit{
    heroes: Hero[] = [];

    public data;

    constructor(private heroService: HeroService) {
    }

    ngOnInit():void {
        this.heroService.getHeroes().then(heroes => {
            var heros = heroes.map((v) => v);

            this.heroes = heros.splice(1, 5);
        });
    }
}
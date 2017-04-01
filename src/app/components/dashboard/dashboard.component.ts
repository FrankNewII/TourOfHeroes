import {Component, OnInit} from '@angular/core';
import {Hero} from "../../models/hero";
import {HeroService} from "../../services/hero.service";

import {Ng2SmartTableModule, LocalDataSource} from 'ng2-smart-table';

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

    public tableData = [];
    public data;

    constructor(private heroService: HeroService) {
        this.data = new LocalDataSource(this.tableData);
    }

    ngOnInit():void {
        this.heroService.getHeroes().then(heroes => {
            var heros = heroes.map((v) => v);

            this.heroes = heros.splice(1, 5);
        });

        setTimeout(() => {
            this.data.load([
                {
                    id: 1,
                    name: "Leanne Graham",
                    username: "Bret",
                    email: "Sincere@april.biz"
                },
                {
                    id: 2,
                    name: "Ervin Howell",
                    username: "Antonette",
                    email: "Shanna@melissa.tv"
                },
                {
                    id: 11,
                    name: "Nicholas DuBuque",
                    username: "Nicholas.Stanton",
                    email: "Rey.Padberg@rosamond.biz"
                }]);
        }, 3000);
    }
}
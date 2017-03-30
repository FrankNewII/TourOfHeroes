import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './components/app.component';
import {HeroesComponent} from "./components/heroes/heroes.component";
import {HeroDetailComponent} from "./components/hero-detail/hero-detail.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {HeroService} from "./services/hero.service";
import {AppRoutingModule} from "./app-routing.module";
import {HttpModule} from "@angular/http";

import {HeroSearchComponent} from "./components/hero-search/hero-search.component";


import {Ng2SmartTableModule} from 'ng2-smart-table';
import {NotFoundComponent} from "./components/not-found/not-found.component";

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent,
        HeroSearchComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        Ng2SmartTableModule
    ],
    providers: [
        HeroService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

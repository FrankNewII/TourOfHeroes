import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HeroesComponent} from "./heroes.component";
import {HeroDetailComponent} from "./hero-detail.component";
import {DashboardComponent} from "./dashboard.component";
import {HeroService} from "./hero.service";
import {AppRoutingModule} from "./app-routing.module";
import {HttpModule} from "@angular/http";

import {HeroSearchComponent} from "./hero-search.component";

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent,
        HeroSearchComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [
        HeroService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

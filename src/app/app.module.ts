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

import {NotFoundComponent} from "./components/not-found/not-found.component";
import {DialogOverviewExampleDialog} from "./components/modal/modal.component";
import {MdDialogModule} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent,
        HeroSearchComponent,
        DialogOverviewExampleDialog,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        MdDialogModule,
        BrowserAnimationsModule
    ],
    entryComponents: [DialogOverviewExampleDialog],
    providers: [

        HeroService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

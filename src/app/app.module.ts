import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { entityConfig } from './entity-metadata';
import { MapComponent } from './map/map.component';
import { NeighborhoodsComponent } from './neighborhoods/neighborhoods.component';
import { ListComponent } from './list/list.component';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
    root: 'http://localhost:3000/',
    getDelay: 3000,
};

@NgModule({
    declarations: [
        AppComponent,
        MapComponent,
        NeighborhoodsComponent,
        ListComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        EffectsModule.forRoot([]),
        EntityDataModule.forRoot(entityConfig),
        HttpClientModule,
        StoreModule.forRoot({}, {}),
    ],
    providers: [
        {
            provide: DefaultDataServiceConfig,
            useValue: defaultDataServiceConfig,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}

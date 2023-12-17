import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { AtmCardComponent } from './features/atm-card/atm-card.component';
import { BalanceComponent } from './features/balance/balance.component';
import { StaticticsComponent } from './features/statictics/statictics.component';
import { HistoryComponent } from './features/history/history.component';
import { NavigationComponent } from './features/navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    AtmCardComponent,
    BalanceComponent,
    StaticticsComponent,
    HistoryComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

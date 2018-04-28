import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
import { ROUTING } from './app.routing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MongodataService } from './mongodata.service'


// Components
import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    HomeComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
    FormsModule,
    HttpModule
  ],
  providers: [MongodataService],
  bootstrap: [AppComponent]
})

export class AppModule { }

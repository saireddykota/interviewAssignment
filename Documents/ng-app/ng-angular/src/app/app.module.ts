import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app-comp1/app.component';
import { AppComp2Component } from './app-comp2/app-comp2.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { TempComponent } from './temp/temp.component';

const routes: Routes = [
  { path: '', redirectTo:'/', pathMatch: 'full'},
  { path: 'sai', component: AppComp2Component },
  { path: 'users', component: UsersComponent },
  
];

@NgModule({
  declarations: [
    AppComponent,
    AppComp2Component,
    UsersComponent,
    TempComponent
  ],
  imports: [
    BrowserModule
, RouterModule.forRoot(routes),
FormsModule ],
  exports: [ 
    RouterModule 
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

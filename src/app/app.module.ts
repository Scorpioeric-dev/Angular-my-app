import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule,Routes} from '@angular/router'
import { PokemonComponent } from './pokemon/pokemon.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';


//configuring routes in app
const appRoutes: Routes = [
  {  path: 'list', component: ListEmployeesComponent},
  {  path: 'create',component: CreateEmployeeComponent},
  {  path: '',redirectTo: '/list', pathMatch: 'full'}
]


@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '',  loadChildren: './persons/persons.module#PersonsModule'},    
    { path: 'persons', loadChildren: './persons/persons.module#PersonsModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

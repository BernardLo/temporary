import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: '', component:  ListComponent},
  {path: 'list', component:  ListComponent},
   {path: 'search', component:  SearchComponent}    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonsRoutingModule { }

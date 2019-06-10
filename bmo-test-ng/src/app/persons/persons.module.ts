import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { PersonsRoutingModule } from './persons-routing.module';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [ListComponent, SearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    PersonsRoutingModule,
    NgxDatatableModule
  ]
})
export class PersonsModule { }

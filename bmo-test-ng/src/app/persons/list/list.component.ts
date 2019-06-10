import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { PersonsService } from '../persons.service';

const LIST_URL = 'api/persons';//'http://bmotestapi.us-east-2.elasticbeanstalk.com/persons';                  

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})


export class ListComponent implements OnInit {
    
  personList;

  constructor( private http: HttpClient,
    private personsService: PersonsService) { }

  ngOnInit() {

    this.personsService.list().subscribe( list =>{
        this.personList = list;
    });



    // this.http.get( LIST_URL ).subscribe(
    //           response => {         
    //     console.log("response of url: " + LIST_URL + " : " + JSON.stringify(response['_embedded'].persons));
    //     this.personList = response['_embedded'].persons;
          
    //   }, err => console.log('Error HttpClient('+ LIST_URL + ') failed: ', JSON.stringify(err) ));

  }


    columns = [
             { width: 30, minWidth: 30,  headerCheckboxable: "false" },             
             { prop: 'firstName', name: 'First Name', width:120, sortable: true },
             { prop: 'lastName', name: 'Last Name', width:120, sortable: true },
    ]
}

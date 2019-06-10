import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SearchPersonIn } from '../models/SearchPersonIn';
import { HttpClient } from '@angular/common/http';
import { PersonsService } from '../persons.service';

const SEARCH_URL = 'api/persons/search/findByFirstNameOrLastName?'; //'http://bmotestapi.us-eas-2.elasticbeanstalk.com/persons/search/findByLastName?name=Smith';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    searchParam: SearchPersonIn = {};
    personList = [];

    constructor(private http: HttpClient,
        private personsService:PersonsService) { }

    ngOnInit() {
    }

    searchPerson() {
        let url: string = SEARCH_URL;
        this.personsService.search(this.searchParam).subscribe(list => {
            this.personList = list;
        });

        // let firstName =this.searchParam.firstName;       
        // let lastName =this.searchParam.lastName; 
        // if( firstName && firstName.trim().length>0){url += 'firstName=' + firstName;}
        // if( lastName && lastName.trim().length>0){
        //     if(!url.endsWith("?")){
        //         url += "&";
        //     }
        //     url += 'lastName=' + lastName;
        // }

        // this.http.get(url).subscribe(
        //           response => {         
        //     console.log("response of url: " + url + " : " + JSON.stringify(response['_embedded'].persons));
        //     this.personList = response['_embedded'].persons;

        //   }, err => console.log('Error HttpClient('+ url + ') failed: ', JSON.stringify(err) ));

    }

    columns = [
        { width: 30, minWidth: 30, headerCheckboxable: "false" },
        { prop: 'firstName', name: 'First Name', width: 120, sortable: true },
        { prop: 'lastName', name: 'Last Name', width: 120, sortable: true },
    ]
}

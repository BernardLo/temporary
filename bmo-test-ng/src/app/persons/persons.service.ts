import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { from, Observable} from 'rxjs';
import { map } from 'rxjs/operators';


import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

/**
 * Service for Persons module
 */
export class PersonsService {
    apiHost:string;
  constructor(private http: HttpClient) { 
    this.apiHost = environment['api_host'] 
  }

  /**
   * List all persons
   */
  public list() : Observable<any>{
      let url = 'api/persons'
      if(this.apiHost && this.apiHost.length>0){
        url = this.apiHost + '/persons'
      }

      return this.http.get(url)
          .pipe(map(
              (res) => {
                  console.log("res of url: " + url + " : " + JSON.stringify(res['_embedded'].persons));
                  return res['_embedded'].persons;

              })//.catch((err) => {console.log('Error HttpClient('+ url + ') failed: ', JSON.stringify(err)); return from([]);} 

          )
  }


/**
 * Search Persons by frstName or lastName
 * @param searchParam 
 */
  public search(searchParam){
      let url = 'api/persons/search/findByFirstNameOrLastName?'
      if (this.apiHost && this.apiHost.length > 0) {
          url = this.apiHost + '/persons/search/findByFirstNameOrLastName?'
      }

      let firstName = searchParam.firstName;
      let lastName = searchParam.lastName;
      if (firstName && firstName.trim().length > 0) { url += 'firstName=' + firstName; }
      if (lastName && lastName.trim().length > 0) {
          if (!url.endsWith("?")) {
              url += "&";
          }
          url += 'lastName=' + lastName;
      }

      return this.http.get(url)
        .pipe(map(
          response => {
              console.log("response of url: " + url + " : " + JSON.stringify(response['_embedded'].persons));
              return response['_embedded'].persons;

          }, err => console.log('Error HttpClient(' + url + ') failed: ', JSON.stringify(err)))
        )
  }
}

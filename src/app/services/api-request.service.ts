import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userData } from '../model/userData.class';
import { totalGameScores} from '../model/totalGamesScores.class';
@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  
  constructor(private httpClient: HttpClient) { }

  urlDomain:string = "http://localhost:8080";

  getdata(username:any) {
    
    const url = this.urlDomain + '/data/'+ username;
    return this.httpClient.get<userData>(url);
  }

  play(username:any) {
    
    const url = this.urlDomain + '/play/'+ username;
    return this.httpClient.get<userData>(url);
  }

  getStatistics() {
    const url = this.urlDomain + '/totalscores';
    return this.httpClient.get<totalGameScores>(url);
  }
  removeUserData(username:any) {
    const url = this.urlDomain + '/reset/'+ username;
    return this.httpClient.delete(url);
  }

}

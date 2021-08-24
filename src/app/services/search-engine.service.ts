import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class SearchEngineService {
  // url = "http://localhost:8000/";
  url = "https://api.tellie.dk/";
  apiKey = ""; // <-- Enter your own key here!

  constructor(private http: HttpClient) { }

  searchData(searchQuery: string): Observable<any> {
    if (searchQuery === '') {
      searchQuery = '0';
    }
    return this.http
      .get(`${this.url + "search/lines/" + searchQuery}`);
  }

  advSearch(searchQuery: string, startDate: number, endDate: number, channels: string): Observable<any> {
    if (searchQuery === '') {
      searchQuery = '0';
    }
    return this.http
      .get(`${this.url + "search/lines/" + searchQuery + "/" + startDate + "/" + endDate + "/" + channels}`);
  }

  convertEpochToLocalDate(time: number): string {
    const d = new Date(0);
    d.setUTCSeconds(time);
    return d.toString();
  }

  getStoryLines(channel: string, time: number, offset: number, limit: number): Observable<any> {
    return this.http
      .get(`${this.url + "search/story/lines/" + channel + '/' + time + '/' + offset + '/' + limit}`);
  }

  getStoryProgramme(channel: string, time: number): Observable<any> {
    return this.http
      .get(`${this.url + "search/story/programme/" + channel + '/' + time}`);
  }
}

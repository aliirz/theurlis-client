import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  shortenUrl(url: string) {
      return this.httpClient.post("/shortenurl",{"ourl": url, "surl": ""})
  }
}

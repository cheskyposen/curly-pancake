import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Joke} from './Joke';

@Injectable({
  providedIn: 'root'
})
export class DadJokeService {
  private httpOptions = {
    headers: new HttpHeaders({
      Accept:  'application/json',
    })
  };
  private url = 'https://icanhazdadjoke.com/';

  constructor(private http: HttpClient) { }

  getRandJoke(): Observable<HttpResponse<Joke>> {
    return this.http.get<any>(this.url, this.httpOptions);
  }
}

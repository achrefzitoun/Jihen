import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../Models/Personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  url:string="https://retoolapi.dev/HYd96h/data";
  
  constructor(private http :HttpClient) { }

  getPersonne(){
    return this.http.get<Person[]>(this.url);
  }
}

import { Component, OnInit } from '@angular/core';
import { PersonneService } from '../Services/personne.service';
import { Person } from '../Models/Personne';

@Component({
  selector: 'app-list-personne',
  templateUrl: './list-personne.component.html',
  styleUrls: ['./list-personne.component.css']
})
export class ListPersonneComponent implements OnInit {

  listPerson!:Person[];

  constructor(private ps: PersonneService) { }

  ngOnInit(): void {
    this.ps.getPersonne().subscribe(data => this.listPerson = data)
  }

}

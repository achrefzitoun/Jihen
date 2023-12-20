import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonneService } from '../Services/personne.service';
import { Person } from '../Models/Personne';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-list-personne',
  templateUrl: './list-personne.component.html',
  styleUrls: ['./list-personne.component.css']
})
export class ListPersonneComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource: MatTableDataSource<Person>; 

  listPerson!: Person[];
  page: number = 1; 

  constructor(private ps: PersonneService) {
    this.dataSource = new MatTableDataSource<Person>();
   }

  ngOnInit(): void {
    this.ps.getPersonne().subscribe(data => {
      this.listPerson = data;
      this.dataSource.data = this.listPerson;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort; // Set the sort here

    });
  }

  onPageChange(event: any): void {
    this.page = event.pageIndex + 1;
  }
}

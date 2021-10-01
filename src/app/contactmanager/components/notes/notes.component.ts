import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Note } from '../../models/note';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit,AfterViewInit{

  @Input()
  notes: Note[]=[];
  displayedColumns:string[] = ['id', 'title', 'date'];

  dataSource!: MatTableDataSource<Note> ; 
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource!.paginator = this.paginator;
  }
  
  constructor() { }

  ngOnInit(): void {
    this.dataSource =new MatTableDataSource<Note>(this.notes)
  }
  applyFilter(event:Event){
    const filtervalue = (event.target as HTMLInputElement).value;
    this.dataSource.filter=filtervalue.trim().toLowerCase();
  }

}

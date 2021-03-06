import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(private dialog:MatDialog) { }
  ngOnInit() {
    
  }


  openAddContactDialog():void{
    let dialogRef=this.dialog.open(DialogComponent,{
      width:'400px',
    });

    dialogRef.afterClosed().subscribe(result=>{
       console.log('The dialog was closed',result)
    });
  }
}

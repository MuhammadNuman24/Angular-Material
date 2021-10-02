import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models/user';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor( private dialogref:MatDialogRef<DialogComponent>) { }

  user!:User;

  ngOnInit(): void {
    this.user =new User()
  }
  save(){
    console.log(
this.dialogref.close(this.user))
}
 
cancel(){
this.dialogref.close(null)
  }

}

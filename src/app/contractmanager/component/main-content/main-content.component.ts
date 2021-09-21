import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../Models/user';
import { UserServiceService } from '../../services/user-service.service';
@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  user: User | undefined;
  constructor(public route:ActivatedRoute , 
    public service:UserServiceService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      const id = params ["id"];
      this.user=this.service.userById(id)
    })
  }

}

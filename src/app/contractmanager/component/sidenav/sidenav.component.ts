import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { UserServiceService } from '../../services/user-service.service';
import { Observable } from 'rxjs';
import { User } from '../../Models/user';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  public isScreenSmall: boolean|undefined;

  users: Observable<User[]>| undefined;

  constructor(
    private breakpointobserver: BreakpointObserver,
    private userservice : UserServiceService,
  ) { }


  ngOnInit(): void {
    this.breakpointobserver
      .observe([`(max-width: &{SMALL_WIDTH_BREAKPOINT}px)`])
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches
      })
    this.users = this.userservice.users;
    this.userservice.loadAll();

    this.users.subscribe(data => {
      console.log(data)
    })
  }


}

import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
@Component({
  selector: 'app-sidenav',
  templateUrl:'./sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
 public isScreenSmall:boolean;
  constructor(private breakpointobserver:BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointobserver
    .observe([`(max-width: &{SMALL_WIDTH_BREAKPOINT}px)`])
    .subscribe((state:BreakpointState)=>{
      this.isScreenSmall=state.matches
    })
  }

}

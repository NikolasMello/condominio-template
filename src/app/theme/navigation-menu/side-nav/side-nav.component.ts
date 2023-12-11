import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationItem, SideNavItem } from '../navigation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit, OnChanges {

  @Input()
  navData: NavigationItem;

  constructor(
    private router: Router,
  ){
    
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges){
    
  }

  navigateToLink(route: string){
    console.log('veirify the route', route)
    this.router.navigate([route])
  }

  navigateToLinkNoChildRoute(route: string, hasChild: boolean){
    if(!hasChild){
      console.log('veirify the route', route)
      this.router.navigate([route])
    }
  }

  activeParentMenu(route: string | undefined): string{
    if(route !== undefined){
      if(this.router.url.startsWith(route)){
        return 'active';
      } else {
        return '';
      }
    } else {
      return '';
    }
  }

  activeRoute(route: string | undefined): string{
    if(route !== undefined){
      if(route === this.router.url){
        return 'active';
      } else {
        return '';
      }
    } else {
      return '';
    }
  }

}

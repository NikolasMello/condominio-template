import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NavigationItem, NavigationMenu, SideNavItem } from './navigation';
import { Router } from '@angular/router';
import { faHome, faEdit, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent implements OnInit {

  faHome:IconDefinition = faHome;
  faEdit:IconDefinition = faEdit;

  navigationClass: NavigationMenu = new NavigationMenu();
  navigations: NavigationItem[] =  this.navigationClass.getNavigationMenu();
  currentNavigation: NavigationItem;
  userMenu: boolean = false;

  constructor(
    private router: Router,
  ){
    this.setCurrentNavigation(this.router.url);
  }

  ngOnInit(): void {
    this.setCurrentNavigation(this.router.url);
  }

  setCurrentNavigation(route: string){
    if(route !== undefined){
      let index = this.navigations.findIndex( item => route.startsWith(item.url ? item.url : ''));
      if(index >= 0){
        this.currentNavigation = this.navigations[index];
      }
    }  
  }

  openUserMenu(){
    this.userMenu = true;
  }

  closeUserMenu(){
    setTimeout(()=> {
      this.userMenu = false;
    },500)
  }
  
  logout(){
    this.router.navigate(['/login'])
  }

  navigateToRoute(navItem: NavigationItem):void{
    this.currentNavigation = navItem;
      if(navItem.url !== undefined){
        this.router.navigate([navItem.url]);
      }
  }

  activeRoute(route: string | undefined): string{
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
}

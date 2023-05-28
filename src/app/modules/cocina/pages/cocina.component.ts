import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-cocina',
  templateUrl: './cocina.component.html',
  styleUrls: ['./cocina.component.scss']
})
export class CocinaComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();
  leftMenuToggled = false;
  vars = {
    rotation: 0,
  }
  leftMenuStyles = {
    width: "2.5em",
    transform: "rotate(" + this.vars.rotation + "deg)",
  };
  constructor(private router: Router) {

  }

  ngOnInit(): void {


    console.log('HomeComponent INIT');
    this.configureLeftMenu();
    this.configureRightMenu();
  }

  configureRightMenu(): void {
    let rightMenu = document.getElementById('rightMenu');
    if (rightMenu) {
      let icon = rightMenu.getElementsByTagName('i')[0];
      if (icon) {
        icon.addEventListener('click', () => {
          this.logout();
        });
      }
    }
  }

  logout(): void {
    window.electronAPI.system.resizeWindowToLogin();
    this.router.navigate(['/login']);
  }


  configureLeftMenu(): void {
    let leftMenu = document.getElementById('leftMenu');
    if (leftMenu) {
      let icon = leftMenu.getElementsByTagName('i')[0];
      if (icon) {
        icon.addEventListener('click', () => {
          this.toggleLeftMenu();
        });
      }
    }
  }

  toggleLeftMenu(): void {
    let leftMenu = document.getElementById('leftMenu');
    if (leftMenu) {
      if (this.vars.rotation == 360) {
        this.vars.rotation = 0;
      }
      this.vars.rotation += 180;
      if (!this.leftMenuToggled) {
        this.leftMenuStyles.width = "40%";
        this.leftMenuStyles.transform = "rotate(" + this.vars.rotation + "deg)";

      } else {
        this.leftMenuStyles.width = "2.5em";
        this.leftMenuStyles.transform = "rotate(" + this.vars.rotation + "deg)";
      }
      this.leftMenuToggled = !this.leftMenuToggled;
    }
  }
}

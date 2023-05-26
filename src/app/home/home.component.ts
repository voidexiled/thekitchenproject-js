import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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

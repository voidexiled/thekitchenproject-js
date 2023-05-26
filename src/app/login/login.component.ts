import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TitleBarComponent } from '../window/title-bar/title-bar.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('LoginComponent INIT');
    this.setUpLogin();
  }
  // Set up document listeners
  setUpLogin() {
    document.getElementById('sendButton')?.addEventListener('click', () => {
      this.login();
    });
  }

  // Login
  login() {
    window.electronAPI.system.resizeWindowToHome();

    this.router.navigate(['/home']);
  }

}

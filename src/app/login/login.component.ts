import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    this.router.navigate(['/home']);
  }

}

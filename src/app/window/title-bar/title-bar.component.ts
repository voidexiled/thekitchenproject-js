import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent implements OnInit {


  ngOnInit(): void {
    console.log('HomeComponent INIT');
    this.setCloseAction();
    this.setMinimizeAction();
    this.setMaximizeAction();
  }

  setCloseAction() {
    document.getElementById('close')?.addEventListener('click', () => {
      window.electronAPI.system.closeWindow();

    });
  }

  setMinimizeAction() {
    document.getElementById('minimize')?.addEventListener('click', () => {
      window.electronAPI.system.minimizeWindow();
    });
  }

  setMaximizeAction() {
    document.getElementById('maximize')?.addEventListener('click', () => {
      window.electronAPI.system.maximizeWindow();
    });
  }

}

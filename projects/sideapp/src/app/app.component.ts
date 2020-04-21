import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sideapp';
  btnClick(){
    const data ={
      details: 'Side app button click'
    }

    const event = new CustomEvent('subapp_btn_click', {detail: data});
    window.dispatchEvent(event);
  }
}

import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'headerapp';
  @Input()
  headtext = 'header';

  btnClick(){
    const data ={
      details: 'Header button click'
    }

    const event = new CustomEvent('header_btn_click', {detail: data});
    window.dispatchEvent(event);
  }
}

import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'mainapp';

  public heading = 'Main App'

  constructor(private cd: ChangeDetectorRef) {

  }
  

  ngOnInit(): void {
    window.addEventListener('header_btn_click', this.customeEventLisnerFunction.bind(this),true);
  }


  customeEventLisnerFunction(event: CustomEvent) {
    this.heading = event.detail.details;
    this.cd.detectChanges();

  }

  ngOnDestroy(): void {
    window.removeEventListener('header_btn_click', this.customeEventLisnerFunction,true);
  }

}

import { Component } from '@angular/core';
import {Router} from '@angular/router'
import { from } from 'rxjs';

import {HttpClient} from '@angular/common/http';
// import * as $ from 'jquery';
// import * as WebuiPopovers from 'webui-popover';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  constructor(private router: Router){
    console.log($('#hello-would'));
    $('#hello-would').webuiPopover({title:'Title',content:'Content'});
     // popover.show('#hello-would',{title:' hello popover',width:300});
     $('a').webuiPopover();
  }
  popupover() {
    console.log('popuping.');
    $('a').webuiPopover();
  }
  gostyleGuidePage(){
    this.router.navigate(['/styleGuide']);
  }
  goHomePage(){
    console.log($('hello-would').html());
    this.router.navigate(['/']);
  }
}

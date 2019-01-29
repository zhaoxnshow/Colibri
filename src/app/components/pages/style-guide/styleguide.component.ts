import { Component, OnInit, OnDestroy, PipeTransform, Pipe, ViewChild, ElementRef ,NgModule} from '@angular/core';
import {HttpService, AlertService} from '../../../services/'
@Component({
  templateUrl: './styleguide.component.html',
  styleUrls: ['./styleguide.component.css']
})
export class StyleGuideComponent{
  
  constructor(private http:HttpService,private alert:AlertService){}

  getTestData(){
    this.http.getData("sdf/sdf").then(data=>{
      this.alert.showScuess("save","scuess");
    }).catch(err=>{
      this.alert.showFaild("save",err);
    });
  }

}
import { Component, OnInit, OnDestroy, PipeTransform, Pipe, ViewChild, ElementRef ,NgModule} from '@angular/core';
@Component({
  // selector: 'seg-vct',
  templateUrl: './vct.component.html',
  styleUrls: ['./vct.component.css']
})
export class VctComponent{
  title = 'VCT';
  num = '0.2555558'
  ngOnChanges() {
    console.log('111');
  }
}
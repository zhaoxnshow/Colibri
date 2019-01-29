import { Component, OnInit, OnDestroy, PipeTransform, Pipe, ViewChild, ElementRef } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { AjaxService } from '../../../services';


@Component({
  templateUrl: './gct.component.html',
  styleUrls: ['./gct.component.css']
})
export class GctComponent implements OnInit{
  title = 'GCT';
  ATMData:any;

  ngOnInit() {
    this.ATMData = 'Get ATM Data'
  }
  constructor(private service: AjaxService) {}
  getAtmData(){
    this.ATMData = 'Loading...';
    this.service.getAtmData()

    this.service.getAtmData().subscribe(data => {
      this.ATMData = data
      console.log(this.ATMData);
    }
  );
  }
}

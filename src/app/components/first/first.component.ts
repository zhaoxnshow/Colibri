import { Component } from '@angular/core';
import { DammyUtilities } from '../../shared/utilities/dammy-utilities';

@Component({
  selector: 'first-cpt',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.styl']
})
export class FirstComponent {
  title = 'my first compnent for test check change directive.';
  private btnNameRe = 'Review ATM';
  private btnNameHi = 'Hidden Review';
  private initData = DammyUtilities.atmData;

  buttonName = this.btnNameRe;
  reviewFlag = false;
  constructor(){
  }
  
  isReview() {
    this.reviewFlag = !this.reviewFlag;
    if (!this.reviewFlag) {
      this.buttonName = this.btnNameRe;
    }else{
      this.buttonName = this.btnNameHi;
    }
  }

  save(){
    console.log(this.initData);
  }
}
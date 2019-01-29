import { NgModule } from '@angular/core';

import { RevRecognitionComponent } from './rev-recognition/rev-recognition.component';

export const ROUTES =
{
  path: 'revenueRecognition',
  component: RevRecognitionComponent
};

@NgModule({
  imports: [
  ],
  declarations: [
    RevRecognitionComponent
  ]
})
export class RevenueRecognitionModule { }

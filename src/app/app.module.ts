import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { from } from 'rxjs';
// Module
import { AppRoutingModule } from './app-routing.module';

// Component ?
import { AppComponent } from './app.component';
import { VctComponent } from './components/pages/vct/vct.component';
import { GctComponent } from '../app/components/pages/gct/gct.component';
import { StyleGuideComponent } from '../app/components/pages/style-guide/styleguide.component';
import { ClientPickComponent } from '../app/components/pages/client-pick/client-pick.component';
import { AjaxService,AlertService,HttpService } from './services'
import { RevenueRecognitionModule } from './components/pages/revenue-recognition/revenue-recognition.module';
import { FirstComponent } from './components/first/first.component';

import { CheckChangeDirective } from './directives/check-change/check-change.directive';





const PAGES_COMPONENTS = [
  AppComponent,
];
const pageModules = [
  RevenueRecognitionModule
];

@NgModule({
  declarations: [
    AppComponent,
    VctComponent,
    GctComponent,
    StyleGuideComponent,
    ClientPickComponent,
    FirstComponent,
    CheckChangeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    pageModules
  ],
  providers: [AjaxService,AlertService,HttpService,{ provide: LocationStrategy, useClass: HashLocationStrategy}],
  // bootstrap: [AppComponent]
  bootstrap: [FirstComponent]
})
export class AppModule { }

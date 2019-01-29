import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { VctComponent } from './components/pages/vct/vct.component';
import { GctComponent } from '../app/components/pages/gct/gct.component';
import { StyleGuideComponent } from '../app/components/pages/style-guide/styleguide.component';
import { ClientPickComponent } from '../app/components/pages/client-pick/client-pick.component';

import { ROUTES as REVENUE_ROUTES } from './components/pages/revenue-recognition/revenue-recognition.module';

const appRoutes: Routes = [
  { path: '', redirectTo: '/clientPick', pathMatch: 'full' },
  {
    path: 'vct',
    component: VctComponent
  },
  {
    path: 'gct',
    component: GctComponent
  },
  {
    path: 'clientPick',
    component: ClientPickComponent
  },
  {
    path: 'styleGuide',
    component: StyleGuideComponent
  },
  {
    path: 'clientPick',
    component: ClientPickComponent
  },
  REVENUE_ROUTES
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

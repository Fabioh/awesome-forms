import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrameComponent } from './pages/master/frame/frame.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';

const routes: Routes = [
  {
    path: '',
    component: FrameComponent,
    children: [
      { path: '', component: WelcomeComponent },
      { path: 'contact', component: ContactFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

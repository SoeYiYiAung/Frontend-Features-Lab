import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SendEmailComponent } from './components/send-email/send-email.component';
import { TcsTestingComponent } from './components/tcs-testing/tcs-testing.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'add', component: AddTutorialComponent },
  { path: 'send-email', component: SendEmailComponent },
  { path: 'tcs', component: TcsTestingComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

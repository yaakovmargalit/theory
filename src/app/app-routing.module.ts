import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindQuestionComponent } from './pages/find-question/find-question.component';

const routes: Routes = [
  {
    path: '',
    component: FindQuestionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

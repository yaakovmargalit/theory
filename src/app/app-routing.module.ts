import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindQuestionComponent } from './pages/find-question/find-question.component';
import { QuizComponent } from './pages/quiz/quiz.component';

const routes: Routes = [
  {
    path: '',
    component: FindQuestionComponent,
  },
  {
    path: 'quiz',
    component: QuizComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

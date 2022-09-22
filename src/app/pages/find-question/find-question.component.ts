import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/service/app.service';
import { QuestionsService } from 'src/app/service/questions.service';

@Component({
  selector: 'find-question',
  templateUrl: './find-question.component.html',
  styleUrls: ['./find-question.component.scss'],
})
export class FindQuestionComponent implements OnInit {
  constructor(private questionsService: QuestionsService) {}
  questions$: Observable<any> = this.questionsService.getQuestion();
  question: any;
  questionNum: number = 1;

  ngOnInit(): void {
    this.findQuestion(1)
  }

  findQuestion = async (num?:number) => {
    console.log('get question');
    await this.questionsService.setQuestions(num||this.questionNum);
    this.questions$.subscribe((val) => {
      this.question = val[0];
    });
  };

  options: AnimationOptions = {
    path: '/assets/loader.json',
  };
  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
  moveQuestion = (type: number) => {
    type?this.questionNum++:this.questionNum--
    this.findQuestion()
  };
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionsService } from 'src/app/service/questions.service';

@Component({
  selector: 'questions-box',
  templateUrl: './questions-box.component.html',
  styleUrls: ['./questions-box.component.scss']
})
export class QuestionsBoxComponent implements OnInit {

  constructor(private questionsService:QuestionsService) { }
  questions$:Observable<any> = this.questionsService.getQuestion()
  ngOnInit(): void {
    this.questionsService.setQuestions(50)
  }

}

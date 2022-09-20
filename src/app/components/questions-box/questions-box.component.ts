import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionsService } from 'src/app/service/questions.service';

@Component({
  selector: 'questions-box',
  templateUrl: './questions-box.component.html',
  styleUrls: ['./questions-box.component.scss'],
})
export class QuestionsBoxComponent implements OnInit {
  constructor(private questionsService: QuestionsService) {}
  questions$: Observable<any> = this.questionsService.getQuestion();
  answers:any
  question!:any
  questionNum: number = 1;
  ngOnInit(): void {}
  findQuestion = async() => {
  await  this.questionsService.setQuestions(this.questionNum)

  this.questions$.subscribe(val=>{
    let data =val[0]
    // data = data.replaceAll('<span>','')
    // data = data.replaceAll('</span>','')
    this.question =data["title"]
    this.answers =data["description"]
    document.querySelector("#answers-text")!.innerHTML=this.answers
    document.querySelector("#question-text")!.innerHTML=this.question
  })

  };
}

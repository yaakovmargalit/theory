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
  answers: any;
  question!: any;
  questionNum: number = 1;
  anss:any[]=[]
  ngOnInit(): void {}
  findQuestion = async () => {
    await this.questionsService.setQuestions(this.questionNum);

    this.questions$.subscribe((val) => {
      let data = val[0];
      this.question = data['title'];
      this.question = this.question.slice(6,this.question.length)
      console.log(this.question);
      
      this.answers = data['description'];
      document.querySelector('#answers-text')!.innerHTML = this.answers;
      document.querySelector('#question-text')!.innerHTML = this.question;
      const start = this.answers.indexOf('<ul>');
      const end = this.answers.indexOf('</ul>');
      let ul = this.answers.slice(start + 4, end);
      const ansArray = [];
      let src =""
      if(this.answers.indexOf("https")!==-1){
        console.log(this.answers.indexOf("http"),this.answers.indexOf("jpg"));
        
        src = this.answers.slice(this.answers.indexOf("http"),this.answers.indexOf("jpg")+3)
console.log(src);

      }
      for (let i = 0; i < 4; i++) {
        const startLi = ul.indexOf('<li>');
        const endLi = ul.indexOf('</li>');
        let ans = ul
          .slice(startLi + 4, endLi)
          .replaceAll('  ', '')
          .replaceAll('<span>', '')
          .replaceAll('</span>', '');
        if (ans.indexOf('<span') !== -1) {
          console.log("correct ans = ",i + 1);
          ans= ans.slice(ans.indexOf(">")+1,ans.length)
        }
        ansArray.push(ans);
        ul = ul.slice(endLi + 4, ul.length);
      }
      console.log(ansArray);
      this.anss=ansArray
    });
  };
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionsService } from 'src/app/service/questions.service';

@Component({
  selector: 'questions-box',
  templateUrl: './questions-box.component.html',
  styleUrls: ['./questions-box.component.scss'],
})
export class QuestionsBoxComponent implements OnInit {
  @Input() question:any
  @Output() moveQuestion = new EventEmitter()
  constructor() {}
  selectedAnswer!:number
  showAnswer:boolean=false
  ngOnInit(): void {}
  toggleAnswer=()=>{
    this.showAnswer=!this.showAnswer
  }

}

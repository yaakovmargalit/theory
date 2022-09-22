import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { QuestionsService } from 'src/app/service/questions.service';
import { FullScreenImageComponent } from '../full-screen-image/full-screen-image.component';

@Component({
  selector: 'questions-box',
  templateUrl: './questions-box.component.html',
  styleUrls: ['./questions-box.component.scss'],
})
export class QuestionsBoxComponent implements OnInit {
  @Input() question: any;
  @Output() moveQuestion = new EventEmitter();
  constructor(public dialog: MatDialog) {}


  selectedAnswer!: number;
  showAnswer: boolean = false;
  ngOnInit(): void {}
  toggleAnswer = () => {
    this.showAnswer = !this.showAnswer;
  };
  getRankIcon = (type: string) => {
    console.log(type);
    return '8';
  };

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(FullScreenImageComponent, {
      width:'800px',
      enterAnimationDuration,
      exitAnimationDuration,
      data:{src:this.question.imageSrc||'assets/images/back.png'}
    });
  }
}

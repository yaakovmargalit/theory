import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  private questions$: BehaviorSubject<any> = new BehaviorSubject({});
  constructor(private _http: HttpClient,private _appService:AppService) {}
  public getQuestionLocal(): Observable<any> {
    return this._http.get("../assets/problems.json");
}

  getQuestion(): Observable<any> {
    return this.questions$.asObservable();
  }

  setQuestions(questionsNum: number) {
    this._appService.setLoader(true)
   return this._http.get(`https://theory-nmfd.onrender.com/question/${questionsNum}`).subscribe(data=>{
      this._appService.setLoader(false)
      this.questions$.next(data)
    })
  }
}

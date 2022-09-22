import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { Observable } from 'rxjs';
import { AppService } from './service/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'theory';
  constructor(private _appServices: AppService) {}
  isLoading$: Observable<boolean> = this._appServices.isLoading$;
  options: AnimationOptions = {
    path: '/assets/loader.json',
  };
  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}

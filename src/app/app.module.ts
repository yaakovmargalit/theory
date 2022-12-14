import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { QuestionsBoxComponent } from './components/questions-box/questions-box.component';
import { HttpClientModule } from '@angular/common/http';
import { FindQuestionComponent } from './pages/find-question/find-question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { LayoutComponent } from './layout/layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { FullScreenImageComponent } from './components/full-screen-image/full-screen-image.component';
import { QuizComponent } from './pages/quiz/quiz.component';

export function playerFactory() {
  return player;
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    QuestionsBoxComponent,
    FindQuestionComponent,
    LayoutComponent,
    SidenavListComponent,
    FullScreenImageComponent,
    QuizComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

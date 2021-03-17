import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdCollapseNavbar } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import {MainpageComponent} from './components/mainpage/mainpage.component';
import {AuthorizationComponent} from './components/authorization/authorization.component';
import {HttpClientModule} from '@angular/common/http'
import { ArticleComponent } from './components/article/article.component';
import { Article } from './components/article/article.component';
import { CommonModule } from '@angular/common';
import {Article1} from 'src/app/components/change/change.component';
import {ChangeComponent} from 'src/app/components/change/change.component';
import {ShownewsService} from 'src/app/services/Shownews/Shownews.service';
import {CreateComponent} from 'src/app/components/create/create.component';
import {Article2} from 'src/app/components/create/create.component';
@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    HeaderComponent,
    NgbdCollapseNavbar,
    AuthorizationComponent,
    Article,
    ArticleComponent,
    Article1,
    ChangeComponent,
    CreateComponent,
    Article2
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [MainpageComponent, Article, Article1, ShownewsService, Article2],
  bootstrap: [HeaderComponent,]
})
export class AppModule { }

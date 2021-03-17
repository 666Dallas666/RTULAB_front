import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component'
import {MainpageComponent} from 'src/app/components/mainpage/mainpage.component';
import {AuthorizationComponent} from 'src/app/components/authorization/authorization.component';
import {ArticleComponent} from 'src/app/components/article/article.component';
import {ChangeComponent} from 'src/app/components/change/change.component'
import { CreateComponent } from './components/create/create.component';
const routes: Routes = [
  {path: "b", component: AppComponent},
  {path: "a", component: HeaderComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full' },
  {path: 'main', component: MainpageComponent},
  {path: 'article/:id', component: ArticleComponent},
  {path: 'change/:id', component:ChangeComponent},
  {path: 'authorization', component: AuthorizationComponent},
  {path: 'create', component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor() { };
  ngOnInit(): void {

  
  }

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessengerComponent } from './components/messenger/messenger.component';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component'
import { DialogueComponent } from './components/dialogue/dialogue.component';
import {ShowdialogsService} from 'src/app/services/Showdialogs/Showdialogs.service';

const routes: Routes = [
  {path: "b", component: AppComponent},
  {path: "a", component: HeaderComponent},
  {path:'messeges', component:MessengerComponent,
children:[
  {path: 'dialogue/:id', component:DialogueComponent},
]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(public showdialogsService: ShowdialogsService) { };
  ngOnInit(): void {
    var i:number = this.showdialogsService.getDialogues().length;
    var dialogues:any[][];
    dialogues = this.showdialogsService.getDialogues();

  
  }

}

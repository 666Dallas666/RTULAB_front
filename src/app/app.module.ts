import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessengerComponent } from './components/messenger/messenger.component';
import {HeaderComponent} from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdCollapseNavbar } from './components/navbar/navbar.component';
import { NgbdPopoverBasic } from './components/popout/popout.component';
import { DialogueComponent } from './components/dialogue/dialogue.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    MessengerComponent,
    HeaderComponent,
    NgbdCollapseNavbar,
    NgbdPopoverBasic,
    DialogueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [HeaderComponent]
})
export class AppModule { }

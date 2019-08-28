import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { VoterComponent } from './voter/voter.component';
=======
import { TodosComponent } from './todos/todos.component';
>>>>>>> 3c3512cfce4690a78627f380b88c6330acf69766

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    VoterComponent
=======
    TodosComponent
>>>>>>> 3c3512cfce4690a78627f380b88c6330acf69766
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

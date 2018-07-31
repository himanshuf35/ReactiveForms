import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RformComponent } from './rform/rform.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SavedComponent } from './saved/saved.component';
 
import { RouterModule, Routes  } from '@angular/router'

const routes : Routes = [
  {path : 'saved',
  component : SavedComponent
},
{ path: '',
    component : RformComponent
  },
  {
  path : 'rform',
  component : RformComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    RformComponent,
    SavedComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

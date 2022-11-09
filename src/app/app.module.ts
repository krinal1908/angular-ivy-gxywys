import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from '../table/table.component';
import { SearchComponent } from '../search/search.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent , TableComponent , SearchComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

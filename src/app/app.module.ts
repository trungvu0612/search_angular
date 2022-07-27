import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { DetailMemeComponent } from './detail-meme/detail-meme.component';
import { ListMemeComponent } from './list-meme/list-meme.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailMemeComponent,
    ListMemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

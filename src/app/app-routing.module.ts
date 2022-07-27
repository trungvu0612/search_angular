import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailMemeComponent} from "./detail-meme/detail-meme.component";
import {ListMemeComponent} from "./list-meme/list-meme.component";

const routes: Routes = [
  {
    path: '', redirectTo: '/list-meme', pathMatch: 'full'
  },
  {
    path:"list-meme/detail-meme/:id",
    component: DetailMemeComponent
  },
  {
    path:"list-meme",
    component: ListMemeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

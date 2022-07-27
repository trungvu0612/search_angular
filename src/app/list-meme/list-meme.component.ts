import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";
import {MemeService} from "../meme.service";
import {Meme} from "../Meme";

@Component({
  selector: 'app-list-meme',
  templateUrl: './list-meme.component.html',
  styleUrls: ['./list-meme.component.scss']
})
export class ListMemeComponent implements OnInit {
  listMeme: Meme[] = [];

  constructor(private http: HttpClient, private memeService: MemeService) {}

  ngOnInit(): void {
    this.getListMeme();
  }

  getListMeme() {
    return this.http.get<any>("https://api.imgflip.com/get_memes").pipe(
      map(i=> this.listMeme = i.data.memes)
    ).subscribe()
  }

  getMeme(meme: Meme):void{
    this.memeService.getMeme(meme)
  }
}

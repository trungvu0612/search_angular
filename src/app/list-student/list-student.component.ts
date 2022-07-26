import {Component, Input, OnInit} from '@angular/core';
import { map} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss']
})
export class ListStudentComponent implements OnInit {
  @Input() chooseMeme: object | undefined;
  listMeme: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getListMeme();
  }

  getListMeme() {
    return this.http.get<any>("https://api.imgflip.com/get_memes").pipe(
      map(i=> this.listMeme = i.data.memes)
    ).subscribe()
  }

  getMeme(meme: object){
    console.log(meme)
  }
}

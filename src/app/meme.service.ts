import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Meme} from "./Meme";

@Injectable({
  providedIn: 'root'
})
export class MemeService {
  chooseMeme: Meme | undefined;

  constructor(private http: HttpClient) { }

  getMeme(meme: Meme){
    this.chooseMeme = meme;
  }
}

import { Component, OnInit } from '@angular/core';
import {MemeService} from "../meme.service";
import {Meme} from "../Meme";

@Component({
  selector: 'app-detail-meme',
  templateUrl: './detail-meme.component.html',
  styleUrls: ['./detail-meme.component.scss']
})
export class DetailMemeComponent implements OnInit {
  chooseMeme: Meme | undefined;

  constructor(
    private memeService: MemeService,
  ) {}

  ngOnInit( ): void {
    this.inputMeme();
    console.log(this.chooseMeme)
  }

  inputMeme(){
   this.chooseMeme = this.memeService.chooseMeme;
  }
}

import { Component } from '@angular/core';
import {Howl} from 'howler'

export interface Track {
  name: string;
  path: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  playlist: Track[] = [
    {
      name: 'Nho Dem Gia Ban',
      path: 'assets/mp3/V13_08. Nho Dem Gia Ban.mp3'
    },
    {
      name: 'Ve Que',
      path: 'assets/mp3/V13_09. Ve Que.mp3'
    },
    {
      name: 'Nguoi O Dung Ve',
      path: 'assets/mp3/V13_10. Nguoi O Dung Ve.mp3'
    }
  ];

  activeTrack: Track = null;
  player: Howl = null;
  isPlaying = false;

  constructor() {}

  start(track: Track) {
    if(this.player) {
      this.player.stop();
    }

    this.player = new Howl({
      src: [track.path],
      onplay: () => {
        this.isPlaying = true;
        this.activeTrack = track;
      },

      onend: () => {

      }
    });
    this.player.play();
  }

  togglePlayer(pause: boolean) {

  }

  next() {

  }

  prev() {

  }

  seek() {

  }

  updateProgress() {

  }
}

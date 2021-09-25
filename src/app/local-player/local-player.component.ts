import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRange } from '@ionic/angular';
import { Howl } from 'howler';

export interface Track {
  name: string;
  path: string;
}

@Component({
  selector: 'app-local-player',
  templateUrl: './local-player.component.html',
  styleUrls: ['./local-player.component.scss'],
})
export class LocalPlayerComponent implements OnInit {

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
  progress = 0;
  @ViewChild('range', {static: false})  range: IonRange;
  
  constructor() { }

  ngOnInit() {}

  start(track: Track) {
    if(this.player) {
      this.player.stop();
    }

    this.player = new Howl({
      src: [track.path],
      onplay: () => {
        console.log("on play....");
        this.isPlaying = true;
        this.activeTrack = track;
        this.updateProgress();
      },

      onend: () => {
        console.log("on end....");
        this.next();
      }
    });

    this.player.play();
  }

  togglePlayer(pause: boolean) {
    if(this.activeTrack == null) {
      this.start(this.playlist[0])
    } 
    this.isPlaying = !pause;
    if(pause) {
      this.player.pause();
    } else {
      this.player.play();
    }
  }

  next() {
    let index = this.playlist.indexOf(this.activeTrack);
    if(index != this.playlist.length - 1) {
      this.start(this.playlist[index + 1]);
    } else {
      this.start(this.playlist[0]);
    }
  }

  prev() {
    let index = this.playlist.indexOf(this.activeTrack);
    if(index > 0) {
      this.start(this.playlist[index - 1]);
    } else {
      this.start(this.playlist[this.playlist.length - 1]);
    }
  }
  
  seekCount = 0;
  seek() {
    this.seekCount++;
    // console.log("--------" + this.seekCount);
    if(this.activeTrack != null && this.seekCount == 1) {
      console.log("seek...")
      let newValue = +this.range.value;
      let duration = this.player.duration();
      this.player.seek(duration * newValue / 100)
    }
    setTimeout( () => {
      if(this.seekCount > 0) {
        this.seekCount = 0;
      }
    }, 500)
    
  }

  updateProgress() {
    let seek = this.player.seek();
    this.progress = seek / this.player.duration() * 100
    setTimeout( () => {
      this.updateProgress()
    }, 500)
  }
}

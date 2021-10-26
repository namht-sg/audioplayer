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
  styleUrls: ['./local-player.component.scss', '../../home/home.page.scss'],
})

export class LocalPlayerComponent implements OnInit {

  playlist: Track[] = [
    {
      name: 'Nhớ Đêm Gia Bạn',
      path: 'assets/mp3/V13_08. Nho Dem Gia Ban.mp3'
    },
    {
      name: 'Về Quê',
      path: 'assets/mp3/V13_09. Ve Que.mp3'
    },
    {
      name: 'Người Ở Đừng Về',
      path: 'assets/mp3/V13_10. Nguoi O Dung Ve.mp3'
    },
    {
      name: 'Gió Đánh Đò Đưa',
      path: 'assets/mp3/V13_05. Gio Danh Do Dua.mp3'
    },
    {
      name: 'Hội Làng',
      path: 'assets/mp3/V13_06. Hoi Lang.mp3'
    },
    {
      name: 'Khúc Hát Sông Quê',
      path: 'assets/mp3/V13_07. Khuc Hat Song Que.mp3'
    }
  ];
  
  @ViewChild('range', {static: false})  range: IonRange;

  activeTrack: Track = null;
  player: Howl = null;
  isDragging = false;
  isPlaying = false;
  progress = 0;
  
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

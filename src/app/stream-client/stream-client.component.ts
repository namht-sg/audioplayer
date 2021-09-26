import { Component, OnInit } from '@angular/core';
import { StreamingMedia, StreamingAudioOptions } from '@ionic-native/streaming-media/ngx';

@Component({
  selector: 'app-stream-client',
  templateUrl: './stream-client.component.html',
  styleUrls: ['./stream-client.component.scss', '../home/home.page.scss'],
})


export class StreamClientComponent implements OnInit {

  constructor(private stream:StreamingMedia) { }

  ngOnInit() {}

  audioURL:string = "";
  isPlaying:boolean = false;
 
  streamAudio(play:boolean) {
    var option:StreamingAudioOptions = {
      bgColor: "black"
    }
    if(this.isPlaying) {
      this.stream.pauseAudio();
    } else {
      this.stream.playAudio(this.audioURL, option);
    }
    this.isPlaying = !play;
  }
}

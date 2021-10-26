import { Component, OnInit } from '@angular/core';
import { StreamingMedia, StreamingAudioOptions } from '@ionic-native/streaming-media/ngx';

@Component({
  selector: 'app-stream-client',
  templateUrl: './stream-client.component.html',
  styleUrls: ['./stream-client.component.scss', '../../home/home.page.scss'],
})


export class StreamClientComponent implements OnInit {

  constructor(private stream:StreamingMedia) { }

  ngOnInit() {}

  audioURL:string = "";
 
  streamAudio() {
      this.stream.playAudio(this.audioURL);
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { IonRange } from '@ionic/angular';
import { Howl } from 'howler';

export interface Track {
  path: string;
}

@Component({
  selector: 'app-media',
  templateUrl: './media.page.html',
  styleUrls: ['./media.page.scss'],
})
export class MediaPage implements OnInit {

  playlist: any = [
    '../../../assets/aikaFuwa.mp3'
  ];
  player: Howl = null;
  isPlaying: any = false;
  constructor() { }
  progress = 0;

  @ViewChild('range', {static: false}) range: IonRange;

  ngOnInit() {

    this.start();

  }

  start() {
    this.player = new Howl({
      src: [this.playlist[0]],
      html5: true,
      onplay: () => {
        this.isPlaying = true;
        this.updateProgress();
      },
      onend: () => {

      }
    });


    this.player.play();
  }

  togglePlayer(pause) {
    this.isPlaying = !pause;
    if (pause) {
      this.player.pause();
    }
    else {
      this.player.play();
    }
  }

  updateProgress()
  {
    let seek = this.player.seek();
    this.progress = (seek / this.player.duration()) * 100 || 0;
    setTimeout(() => {
      this.updateProgress();
    },100)
  }

  seek()
  {
    let newValue = +this.range.value
    let duration = this.player.duration();
    this.player.seek(duration * (newValue / 100));
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from 'src/app/models/track.model';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-controls',
  templateUrl: './player-controls.component.html',
  styleUrls: ['./player-controls.component.scss'],
})
export class PlayerControlsComponent implements OnInit {
  @Input() _activeTrack: TrackModel = {
    trackId: '',
    art: {
      fileId: '',
      fileName: '',
      fileType: '',
      fileFolder: '',
      fileLink: '',
      fileSizeInMbs: 0,
      bytes: 0,
    },
    year: 0,
    type: '',
    genre: '',
    contributes: [],
    title: '',
    urls: [],
    artist: '',
  };
  trackState: string = 'paused';

  private track: TrackModel = {
    artist: 'De Richo',
    art: {
      bytes: 0,
      fileFolder: 'tracks',
      fileId: Math.random().toString(),
      fileLink: 'http://localhost:4200/assets/images/wenge.jpg',
      fileName: 'lorem',
      fileSizeInMbs: 0,
      fileType: 'lorem',
    },
    contributes: ['berry cooder'],
    genre: 'lorem',
    reviews: [],
    title: 'Wenge',
    trackId: Math.random().toString(),
    type: 'lorem',
    urls: [
      {
        color: '',
        platform: '',
        platformIcon: '',
        url: '',
      },
    ],
    year: 9,
  };

  constructor(private playerServices: PlayerService) {}

  ngOnInit(): void {
    this.playerServices.pushActiveTrack(this.track);
  }

  get activeTrack(): TrackModel {
    return this.playerServices.track;
  }

  handleTrackState() {
    const trackStateElement = document.getElementById(
      'track-state'
    ) as HTMLElement;
    const playingState = 'playing';
    const pausedState = 'paused';

    switch (this.trackState) {
      case playingState:
        this.trackState = pausedState;
        break;
      case pausedState:
        this.trackState = playingState;
        break;
      default:
        console.log('none of the states are active the activeTrack must be undefined');
        break;
    }
  }
}

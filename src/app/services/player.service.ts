import { Injectable } from '@angular/core';
import { TrackModel } from '../models/track.model';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private _track: TrackModel = {
    art: {
      bytes: 0,

      fileFolder: 'tracks',
      fileId: Math.random(),
      fileLink: '',
      fileName: '',
      fileSizeInMbs: 0,
      fileType: '',
    },
    contributes: [],
    genre: '',
    reviews: [
      {
        rating: 0,
        reviewDate: '',
        reviewer: '',
        reviewId: '',
        reviewText: '',
      },
    ],
    title: '',
    trackId: '',
    type: '',
    urls: [
      {
        color: '',
        platform: '',
        platformIcon: '',
        url: '',
      },
    ],
    year: 9,
    artist: ''
  };


  /**
   * @description pushes the active track into the player controls to enable it to be modified
   * @param track : TrackModel
   */
  pushActiveTrack (track: TrackModel) {

    /**
     * unable to nullify because of final type allocation
     * this._track = undefined 
     */

    try {
      this._track = track;

      if (this._track != undefined) {
        console.log('track pushed successfully');
      } else {
        console.log('track can\'t be pushed');
      }
      
    } catch (error) {
      console.error(error)
    }
  }

  get track() { return this._track }
}

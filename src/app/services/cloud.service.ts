import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CloudService {
  files: any = [

// Song 1
    {
      url: './assets/audios/Queen_BohemianRhapsody.mp3',
      name: 'Bohemian Rhapsody',
      artist: 'Queen',
      album: 'Live Killers', style: 'Rock', time: '05:55'
    },
    // Song 2
    {
      url: './assets/audios/Nirvana_SmellsLikeTeenSpirit.mp3',
      name: 'Smells like teen spirit',
      artist: 'Nirvana',
      album: 'Nevermind', style: 'Alternativa/Indie', time: '05:01'
    },

  //Song 3
    { url: './assets/audios/SystemOfADown_ChopSuey.mp3',
      name: 'Chop Suey!',
      artist: 'System of a down',
      album: 'Toxicity', style: 'Metal', time: '03:30'
    },

  //Song 4
    {
      url: './assets/audios/ThirtySecondsToMars_ThisIsWar.mp3',
      name: 'This is war',
      artist: 'Thirty seconds to Mars',
      album: 'This Is War', style: 'Rock alternativo', time: '05:27'
  },

  //Song 5
  {
    url: './assets/audios/Evanescence_BringMeToLife.mp3',
    name: 'Bring me to life',
    artist: 'Evanescence',
    album: 'Live Killers', style: 'Rock gótico', time: '03:57'
},


  ];

  getFiles() {
   return of(this.files);
  }
}

import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})

export class ReproductorComponent implements OnInit {

  audioObj = new Audio();
  audioEvents = [
    "ended",
    "error",
    "play",
    "playing",
    "pause",
    "timeupdate",
    "canplay",
    "loadedmetadata",
    "loadstar"
  ];
  files=[
    {
      url: './assets/audios/Evanescence_BringMeToLife.mp3',
      name: 'Bring Me To Life'
    },
    {
      url: './assets/audios/Nirvana_SmellsLikeTeenSpirit.mp3',
      name: 'Smells Like Teen Spirit'
    },
    {
      url: './assets/audios/Queen_BohemianRhapsody.mp3',
      name: 'Bohemian Rhapsody'
    },
    {
      url: './assets/audios/SystemOfADown_ChopSuey.mp3',
      name: 'ChopSuey!'
    },
    {
      url: './assets/audios/ThirtySecondsToMars_ThisIsWar.mp3',
      name: 'This Is War'
    },

  ];

  currentTime = '00:00';
  duration = '00:00';
  seek = 0;

  stremObserver(url){
    return new Observable(observer => {

      this.audioObj.src = url;
      this.audioObj.load();
      this.audioObj.play();


      const handler = (event: Event) =>{
        console.log(event);
        this.seek = this.audioObj.currentTime;
        this.duration = this.timeFormat(this.audioObj.duration);
        this.currentTime = this.timeFormat(this.audioObj.currentTime);


      }

      this.addEvent(this.audioObj, this.audioEvents, handler);

      return ()=>{
        this.audioObj.pause();
        this.audioObj.currentTime = 0;

        this.removeEvent(this.audioObj, this.audioEvents, handler);
      }

    });
  }

  addEvent(obj, events, handler){
    events.forEach(event =>{
      obj.addEventListener(event, handler);
    });
  }

  removeEvent(obj, events, handler){
    events.forEach(event =>{
      obj.removeEventListener(event, handler);
    });
}

setSeekTo(ev){
  this.audioObj.currentTime = ev.target.value;
}

  setVolume(ev){
    this.audioObj.volume = ev.target.value;
    console.log(ev.target.value);
  }

  openFile(url){
    this.stremObserver(url).subscribe(event => {});

    console.log(url);
  }

  play(){
    this.audioObj.play();
    console.log('Clicked Play Btn');
  }

  pause(){
    this.audioObj.pause();
    console.log('Clicked Pause Btn');
  }
  stop(){
    this.audioObj.pause();
    this.audioObj.currentTime = 0;
    console.log('Clicked Stop Btn');
  }

  timeFormat(time, format="m:ss"){
    const momentTime = time * 1000;
    return moment.utc(momentTime).format(format);

  }

  constructor() { }

  ngOnInit(): void {


  }

}

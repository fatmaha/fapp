import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Joke } from 'src/app/models/joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  
  @Input('joke') data:Joke; //@Input('joke') data:object; //@Input() joke:object; //@Input() joke:any; 
  @Output() jokeDeleted = new EventEmitter<{index: number}>();

  constructor() {
   
   }

  ngOnInit() {
  }

  onDeleteJoke() {
    this.jokeDeleted.emit()
  }


}

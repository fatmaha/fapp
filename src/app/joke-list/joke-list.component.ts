import { Component, OnInit } from '@angular/core';
import { Joke } from '../models/joke';


@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {

  //jokelist: Array<object>;
  jokelist: Array<Joke>;
  constructor() { 
    // this.jokelist = [
    //   {
    //       setup:"object 1",
    //       punchline:"bla bla bla"
    //   },
    //   {
    //     setup:"object 1",
    //     punchline:"bla bla bla"
    // },
    // {
    //   setup:"object 1",
    //   punchline:"bla bla bla"
    // }
    // ]

    this.jokelist = [
      new Joke('object 1','desc 1'),
      new Joke('object 2','desc 2'),
      new Joke('object 3','desc 3'),
    ];
  }

  ngOnInit() {
  }

  addNewJoke(val: Joke){
    this.jokelist.unshift(val);
  }

  onJokeDeleted(index){ 
    this.jokelist.splice(index, 1); 
}


}

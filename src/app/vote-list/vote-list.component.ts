import { Component, OnInit } from '@angular/core';
import { Vote } from '../models/vote';

@Component({
  selector: 'app-vote-list',
  templateUrl: './vote-list.component.html',
  styleUrls: ['./vote-list.component.css']
})
export class VoteListComponent implements OnInit {

  votelist: Array<Vote>;
  constructor() { 
    this.votelist = [
      new Vote('object 1','desc 1'),
      new Vote('object 2','desc 2'),
      new Vote('object 3','desc 3'),
    ];
  }

  ngOnInit() {
  }

  addNewVote(val: Vote){
    this.votelist.unshift(val);
  }

}

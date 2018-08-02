import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Vote } from '../models/vote';

@Component({
  selector: 'app-vote-form',
  templateUrl: './vote-form.component.html',
  styleUrls: ['./vote-form.component.css']
})
export class VoteFormComponent implements OnInit {

  @Output() voteCreated = new EventEmitter<Vote>();
  constructor() { }

  ngOnInit() {
  }

  addvote( title : string, link : string){
    var nlink = "("+link.replace('http://','').replace('https://','').split(/[/?#]/)[0]+")";
    this.voteCreated.emit(new Vote(title,nlink));
  }

}

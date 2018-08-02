import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Vote } from 'src/app/models/vote';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  @Input('vote') data:Vote;
  constructor() { }

  ngOnInit() {
  }

}

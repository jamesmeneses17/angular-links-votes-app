import { Component, OnInit, HostBinding, Input } from '@angular/core';
// Link Class
import { Link } from './link.model';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent  {
  @Input() link!: Link;

  voteUp() {
    this.link.voteUp();
  }

  voteDown() {
    this.link.voteDown();
  }


}
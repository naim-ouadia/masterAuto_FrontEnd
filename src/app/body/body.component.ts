import {Component, OnInit} from '@angular/core';
import {InfosService} from '../services/client/infos.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() {
  }

  client;

  ngOnInit() {
  }

}

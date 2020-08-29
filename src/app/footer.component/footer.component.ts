import { Component, OnInit } from '@angular/core';
import * as npm from '../../../package.json';

// console.log(npm.version);
@Component({
  selector: 'app-sew-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  version = npm.version;

  constructor() { }

  ngOnInit(): void {
  }

}

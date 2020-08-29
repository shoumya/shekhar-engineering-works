import { Component, OnInit } from '@angular/core';
// import { Info } from '../shared/services/application-interfaces';

@Component({
  selector: 'app-sew-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  // content: Info[];
  today: number = Date.now();

  constructor() { }

  ngOnInit(): void {
    /*
    this.content = [
      {
        id: '1',
        data: `English Text Construction is an internationally refereed journal of
        English Linguistics, Applied Linguistics and Literary Studies focusing on
        the communicating subject and the text constructing this intersubjective
        communication. The journal offers a forum for currently converging
        tendencies that place the text-constructing subject in centre stage.`
      },
      {
        id: '2',
        data: `This
        general common denominator subsumes fundamental movements in the three
        disciplines of English studies, viz. literary studies, linguistics and
        applied linguistics. In literary studies narratological perspectives
        remain of abiding interest, as well as study of the psychologically and
        ideologically fragmented subject as it reveals itself in literary texts.`
      }
    ];
    */

  }

}

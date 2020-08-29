import { Component, OnInit, Inject } from '@angular/core';
import { StaticDataService } from '../shared/services/application-static.dataservice';

@Component({
  selector: 'app-sew-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  // content1: string;
  // content2: string;

  constructor(@Inject(StaticDataService) private appDataService: StaticDataService) {
    console.log('Injected the static data service here');
  }

  ngOnInit(): void {

    // this.content1 = this.appDataService.aboutUsContent[0];
    // this.content2 = this.appDataService.aboutUsContent[1];
  }


}

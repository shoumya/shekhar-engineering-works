import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeComponentParams } from '../shared/services/application-interfaces';

@Component({
  selector: 'app-sew-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  private paramsMapData: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.paramsMapData = this.route.snapshot.paramMap;
  }

  fetchParamKeysAsString(): string {
    return `Id-${this.paramsMapData.get('id')} - User-${this.paramsMapData.get('user')}`;
  }

  fetchParamKeysAsObject(): HomeComponentParams {
    return {
      id: this.paramsMapData.get('id'),
      user: this.paramsMapData.get('user')
    };
  }

}


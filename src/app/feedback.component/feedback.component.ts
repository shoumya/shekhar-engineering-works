import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sew-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  hasUserInteracted = false;

  constructor() { }

  ngOnInit(): void {
  }

  Register(ngForm: NgForm): void {
    console.log(ngForm);
    this.hasUserInteracted = (ngForm.dirty) ? true : false;
    console.log('User Interacted status is ', this.hasUserInteracted);
  }

}

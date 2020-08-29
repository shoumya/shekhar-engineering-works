import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sew-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Register(regForm: NgForm): void {
    console.log(regForm);
  }



}

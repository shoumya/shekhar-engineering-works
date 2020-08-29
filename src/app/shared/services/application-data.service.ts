import { Injectable } from '@angular/core';
import { Feedback, ContactUs } from './application-interfaces';

@Injectable({
  providedIn: 'root',
})

export class ApplicationDataService {

  constructor() { }

  feedbackContent: Feedback;
  contactUsContent: ContactUs;

  set contentFeedBack(fdbk: Feedback) {
    this.feedbackContent.title = fdbk.title;
    this.feedbackContent.description = fdbk.description;
    this.feedbackContent.feedback = fdbk.feedback;
  }

  get contentFeedback(): Feedback {
    return this.feedbackContent;
  }

  set contentContactUs(contactUs: ContactUs) {
    this.contactUsContent.firstName = contactUs.firstName;
    this.contactUsContent.lastName = contactUs.lastName;
    this.contactUsContent.email = contactUs.email;
    this.contactUsContent.phone = contactUs.phone;
  }

  get contentContactUs(): ContactUs {
    return this.contactUsContent;
  }

}

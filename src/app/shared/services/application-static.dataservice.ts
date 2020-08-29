import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class StaticDataService {

  aboutUs: string[] = [
    `In Applied linguistics, the subject also plays a central role. Applied
  linguistic interest in text and the construal of subjectivity is
  reflected, among others, in genre-oriented approaches to text, and in
  discourse-oriented and corpus-based analyses as the basis for various ELT
  applications.`,
    `For instance, considerable attention has been devoted to issues such as
  stance in (research) writing and presentations, and to subjectivity in
  translation studies. Similarly, in language teaching methodology increased
  attention is given to individual learners and learning styles.`
  ];

  constructor() { }

  get aboutUsContent(): string[] {
    return this.aboutUs;
  }

}

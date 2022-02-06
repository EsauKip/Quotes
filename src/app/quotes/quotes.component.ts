import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
 quotes:Quote[] = [
    new Quote (1,'Charles','Human spirit','The human spirit must prevail over technology to allow humans be in charge.','Albert Einstein', new Date(2019,7,12)),
    new Quote (2,'Wendy','Technology…','Technology… the knack of so arranging  that we don’t have to experience it.','Max Frisch',new Date(2019,7,14)),
    new Quote (3,'Mikey','The great myth','The great myth of our times is that technology is communication.','Libby Larsen',new Date(2019,6,3)),
    new Quote (4,'Beatrice','Communication','Communications tools don’t get socially interesting until they get technologically boring.','Clay Shirky',new Date(2019,7,7)),
    new Quote (5,'Charles','Code and people','Programs must be written for people to read, and only incidentally for machines to execute.','Harold Abelson',new Date(2019,7,17)),
    new Quote (6,'Alfred','Tech and life','For a list of all the ways technology has failed to improve the quality of life, please press three.','Alice Kahn',new Date(2019,7,15))
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

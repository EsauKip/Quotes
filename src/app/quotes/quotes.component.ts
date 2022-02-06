import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
 quotes:Quote[] = [
    new Quote (1,'mike','Human spirit','The human spirit must prevail over technology to allow humans be in charge.','Albert Einstein', new Date(2029,7,22)),
    new Quote (2,'kim','Technology…','Technology… the knack of so arranging  that we don’t have to experience it.','Max Frisch',new Date(2021,7,14)),
    new Quote (3,'josh','The great myth','The great myth of our times is that technology is communication.','Libby Larsen',new Date(1991,6,3)),
    new Quote (4,'Beatrice','Communication','Communications tools don’t get socially interesting until they get technologically boring.','Clay Shirky',new Date(2022,7,17)),
    new Quote (5,'joy','Code and people','Programs must be written for people to read, and only incidentally for machines to execute.','Harold Abelson',new Date(2021,4,7)),
    new Quote (6,'Abby','Tech and life','For a list of all the ways technology has failed to improve the quality of life, please press three.','Alice Kahn',new Date(2019,9,25))
  ];
  displayInfo(index:number){
    this.quotes[index].showInfo=!this.quotes[index].showInfo;
  }
  deleteAquote(isdeleted:any,index:number){
    if(isdeleted){
      let check=confirm("Are you sure you want to delete this quote");
      if(check){
this.quotes.splice(index,1);
      }
    }

  }
  newQuote(quote:Quote){
    let quoteLength=this.quotes.length;
    quote.id=quoteLength+1;
    this.quotes.unshift(quote);
    
  }
  constructor() { }


  ngOnInit(): void {
  }

}

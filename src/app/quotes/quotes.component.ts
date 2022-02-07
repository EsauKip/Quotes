import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
 quotes:Quote[] = [
    new Quote (1,'mike','Life',' “Life is what happens when you’re busy making other plans.”','John lennon',  new Date(2021,7,22)),
    new Quote (2,'kim','Love','"To be fully seen by somebody, then, and be loved anyhow - this is a human offering that can border on miraculous."','Elizabeth Gilbert',new Date(2021,7,14)),
    new Quote (3,'josh','Growth','“Always walk through life as if you have something new to learn and you will.”','Vernon Howard',new Date(2021,6,3)),
    new Quote (4,'Beatrice','Spiritual Life','“More smiling, less worrying. More compassion, less judgment. More blessed, less stressed. More love, less hate.” ','Roy .T.Benett',new Date(2021,7,17))
    
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

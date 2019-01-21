import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [

    trigger('goals', [
       transition('* =>*', [
         query(':enter', style({ opacity: 0 }), {optional: true}),
         query(':enter', stagger('300ms', [
           animate('.6s ease-in', keyframes([
             style({opacity: 0, transform: 'translateY(-75%', offset: 0}),
             style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
             style({opacity: 1, transform: 'translateY(-75%', offset: 1})
           ]))]), {optional: true}),
         query(':leave', stagger('300ms', [
            animate('.6s ease-in', keyframes([
              style({opacity: 1, transform: 'translateY(0)', offset: 0}),
              style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
              style({opacity: 0, transform: 'translateY(-75%', offset: 1})
            ]))]), {optional: true}),

       ])
    ])

  ]
//  styles: [` p{font-weight:bold} div{color:gray;} `]
})
export class HomeComponent implements OnInit {
  itemCount = 4;
  btnText = 'Add Item';
  goalText = 'My first life goal';
  goals = ['my first goal', '2nd goal', '3rd goal' ];
  constructor() { }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }
  addItem() {
      this.goals.push(this.goalText);
      this.goalText = '';
      this.itemCount = this.goals.length;
  }
  removeItem(i){

     this.goals.splice(i,1);
  }

}

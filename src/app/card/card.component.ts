import { Component, OnInit,Input,forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(()=>CardComponent)
    }
  ],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {

  @Input('bodyText') bodyText: string;
  @Input('titleText') titleText: string;

  tabindex:number = 0;
  constructor() { }
  
  ngOnInit(): void {
  }

}

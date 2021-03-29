import { Component, OnInit,Input,forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-document-views',
  templateUrl: './document-views.component.html',
  styleUrls: ['./document-views.component.css'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(()=>DocumentViewsComponent)
    }
  ],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class DocumentViewsComponent implements OnInit {
  
  
  
  @Input()  views: Array<any>;
  @Input()  viewtype: string;

  constructor() { }

  ngOnInit(): void {
    
  }
  

}

import { Component, OnInit, Input, Output ,EventEmitter, forwardRef, ChangeDetectionStrategy} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-sticky-menu',
  templateUrl: './sticky-menu.component.html',
  styleUrls: ['./sticky-menu.component.css'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(()=>StickyMenuComponent)
    }
  ],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class StickyMenuComponent implements OnInit {
  
  @Input()  doctypes: Array<any>;
  @Output() onChangeType = new EventEmitter<string>(); 
  active: number = 0;
  constructor() { }
   ngOnInit(): void {
       
  }
  onTypeSearch(event){
   this.onChangeType.emit(event);
  }

}

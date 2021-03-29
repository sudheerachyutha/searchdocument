import { Component, OnInit } from '@angular/core';
import * as fromCommon from '../common/constants';

@Component({
  selector: 'app-mobile-view',
  templateUrl: './mobile-view.component.html',
  styleUrls: ['./mobile-view.component.css']
})
export class MobileViewComponent implements OnInit {
  
  views = fromCommon.docuementViews;
  doctypes = fromCommon.docuementTypes;
  selectedDoc: string;
  selectedDocTyp: string;

  constructor() { }

  ngOnInit(): void {

  }

  onChangedocType($event: any) {
    this.selectedDocTyp = $event;
    this.onSearchResults($event, this.selectedDoc);
  }

  namesearch($event: any) {
    this.selectedDoc = $event;
    this.onSearchResults(this.selectedDocTyp, $event);
  }
  onSearchResults(type: any, searchdata: any) {
    let docTypedata = fromCommon.typeFilter(type);
    this.views = fromCommon.searchFilter(docTypedata, searchdata);
  }

}
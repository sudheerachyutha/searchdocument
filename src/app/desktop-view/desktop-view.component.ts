import { Component, OnInit } from '@angular/core';
import * as fromCommon from '../common/constants';

@Component({
  selector: 'app-desktop-view',
  templateUrl: './desktop-view.component.html',
  styleUrls: ['./desktop-view.component.css']
})
export class DesktopViewComponent implements OnInit {


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
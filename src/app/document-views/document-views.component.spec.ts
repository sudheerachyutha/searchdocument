import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentViewsComponent } from './document-views.component';

describe('DocumentViewsComponent', () => {
  let component: DocumentViewsComponent;
  let fixture: ComponentFixture<DocumentViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentViewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryAndUrlParamsComponent } from './query-and-url-params.component';

describe('QueryAndUrlParamsComponent', () => {
  let component: QueryAndUrlParamsComponent;
  let fixture: ComponentFixture<QueryAndUrlParamsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QueryAndUrlParamsComponent]
    });
    fixture = TestBed.createComponent(QueryAndUrlParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropsComponentComponent } from './props-component.component';

describe('PropsComponentComponent', () => {
  let component: PropsComponentComponent;
  let fixture: ComponentFixture<PropsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropsComponentComponent]
    });
    fixture = TestBed.createComponent(PropsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

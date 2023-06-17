import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesExComponent } from './pipes-ex.component';

describe('PipesExComponent', () => {
  let component: PipesExComponent;
  let fixture: ComponentFixture<PipesExComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipesExComponent]
    });
    fixture = TestBed.createComponent(PipesExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

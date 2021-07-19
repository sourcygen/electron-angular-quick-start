import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MutiplesComponent } from './mutiples.component';

describe('MutiplesComponent', () => {
  let component: MutiplesComponent;
  let fixture: ComponentFixture<MutiplesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MutiplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutiplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

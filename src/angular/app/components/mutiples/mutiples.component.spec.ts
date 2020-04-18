import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutiplesComponent } from './mutiples.component';

describe('MutiplesComponent', () => {
  let component: MutiplesComponent;
  let fixture: ComponentFixture<MutiplesComponent>;

  beforeEach(async(() => {
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

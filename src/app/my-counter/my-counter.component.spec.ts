import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCounterComponent } from './my-counter.component';
import {StoreModule} from "@ngrx/store";
import {counterReducer} from "../counter.reducer";

describe('MyCounterComponent', () => {
  let component: MyCounterComponent;
  let fixture: ComponentFixture<MyCounterComponent>;
  let counterAmount;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({count: counterReducer})
      ],
      declarations: [ MyCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCounterComponent);
    component = fixture.componentInstance;
    counterAmount = fixture.debugElement.nativeElement.querySelector('#counter');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should show the current count as zero', () => {
    fixture.detectChanges();
    expect(counterAmount.textContent).toContain('0');
  })
  it('should be 1 after increment button clicked', () => {
    const incButton = fixture.debugElement.nativeElement.querySelector('#increment');
    incButton.click();
    fixture.detectChanges();
    expect(counterAmount.textContent).toContain('1');
  })
  it('should be -11 after decrement button clicked', () => {
    const decButton = fixture.debugElement.nativeElement.querySelector('#decrement');
    decButton.click();
    fixture.detectChanges();
    expect(counterAmount.textContent).toContain('-1');
  })
  it('should reset to zero after increment and reset', () => {
    const incButton = fixture.debugElement.nativeElement.querySelector('#increment');
    incButton.click();
    fixture.detectChanges();
    expect(counterAmount.textContent).toContain('1');
    const resetButton = fixture.debugElement.nativeElement.querySelector('#reset');
    resetButton.click();
    fixture.detectChanges();
    expect(counterAmount.textContent).toContain('0');
  })
});

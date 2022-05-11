import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineDrinkingComponent } from './wine-drinking.component';

describe('WineDrinkingComponent', () => {
  let component: WineDrinkingComponent;
  let fixture: ComponentFixture<WineDrinkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WineDrinkingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WineDrinkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

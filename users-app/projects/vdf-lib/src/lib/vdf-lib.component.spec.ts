import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VdfLibComponent } from './vdf-lib.component';

describe('VdfLibComponent', () => {
  let component: VdfLibComponent;
  let fixture: ComponentFixture<VdfLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VdfLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VdfLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

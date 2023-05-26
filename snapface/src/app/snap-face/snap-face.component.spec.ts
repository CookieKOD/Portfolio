import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapFaceComponent } from './snap-face.component';

describe('SnapFaceComponent', () => {
  let component: SnapFaceComponent;
  let fixture: ComponentFixture<SnapFaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SnapFaceComponent]
    });
    fixture = TestBed.createComponent(SnapFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

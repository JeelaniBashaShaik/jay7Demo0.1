import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JbGridComponent } from './jb-grid.component';

describe('JbGridComponent', () => {
  let component: JbGridComponent;
  let fixture: ComponentFixture<JbGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JbGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JbGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

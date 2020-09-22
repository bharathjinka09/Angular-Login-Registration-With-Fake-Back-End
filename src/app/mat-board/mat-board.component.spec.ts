
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatBoardComponent } from './mat-board.component';

describe('MatBoardComponent', () => {
  let component: MatBoardComponent;
  let fixture: ComponentFixture<MatBoardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MatBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

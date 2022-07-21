import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClothesByTempComponent } from './list-clothes-by-temp.component';

describe('ListClothesByTempComponent', () => {
  let component: ListClothesByTempComponent;
  let fixture: ComponentFixture<ListClothesByTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListClothesByTempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListClothesByTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

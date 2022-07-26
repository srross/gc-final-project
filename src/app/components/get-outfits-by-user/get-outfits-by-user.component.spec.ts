import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOutfitsByUserComponent } from './get-outfits-by-user.component';

describe('GetOutfitsByUserComponent', () => {
  let component: GetOutfitsByUserComponent;
  let fixture: ComponentFixture<GetOutfitsByUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetOutfitsByUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetOutfitsByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOutfitComponent } from './create-outfit.component';

describe('CreateOutfitComponent', () => {
  let component: CreateOutfitComponent;
  let fixture: ComponentFixture<CreateOutfitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOutfitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOutfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMemeComponent } from './list-meme.component';

describe('ListMemeComponent', () => {
  let component: ListMemeComponent;
  let fixture: ComponentFixture<ListMemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

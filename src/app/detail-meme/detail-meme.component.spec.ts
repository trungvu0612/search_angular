import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMemeComponent } from './detail-meme.component';

describe('DetailMemeComponent', () => {
  let component: DetailMemeComponent;
  let fixture: ComponentFixture<DetailMemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailMemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

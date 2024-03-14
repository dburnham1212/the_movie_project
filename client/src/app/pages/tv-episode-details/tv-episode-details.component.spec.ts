import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvEpisodeDetailsComponent } from './tv-episode-details.component';

describe('TvEpisodeDetailsComponent', () => {
  let component: TvEpisodeDetailsComponent;
  let fixture: ComponentFixture<TvEpisodeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvEpisodeDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TvEpisodeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorsDashboardComponent } from './collectors-dashboard.component';

describe('CollectorsDashboardComponent', () => {
  let component: CollectorsDashboardComponent;
  let fixture: ComponentFixture<CollectorsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectorsDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollectorsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

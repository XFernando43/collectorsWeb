import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorTableComponent } from './collector-table.component';

describe('CollectorTableComponent', () => {
  let component: CollectorTableComponent;
  let fixture: ComponentFixture<CollectorTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectorTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollectorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

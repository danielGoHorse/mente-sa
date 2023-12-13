import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RelaxationCenterPage } from './relaxation-center.page';

describe('RelaxationCenterPage', () => {
  let component: RelaxationCenterPage;
  let fixture: ComponentFixture<RelaxationCenterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RelaxationCenterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

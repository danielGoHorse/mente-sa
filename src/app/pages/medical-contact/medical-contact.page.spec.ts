import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedicalContactPage } from './medical-contact.page';

describe('MedicalContactPage', () => {
  let component: MedicalContactPage;
  let fixture: ComponentFixture<MedicalContactPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MedicalContactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

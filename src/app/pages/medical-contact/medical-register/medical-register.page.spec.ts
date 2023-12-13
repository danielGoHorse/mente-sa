import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedicalRegisterPage } from './medical-register.page';

describe('MedicalRegisterPage', () => {
  let component: MedicalRegisterPage;
  let fixture: ComponentFixture<MedicalRegisterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MedicalRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactRegisterPage } from './contact-register.page';

describe('ContactRegisterPage', () => {
  let component: ContactRegisterPage;
  let fixture: ComponentFixture<ContactRegisterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContactRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

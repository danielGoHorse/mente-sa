import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainContactPage } from './main-contact.page';

describe('MainContactPage', () => {
  let component: MainContactPage;
  let fixture: ComponentFixture<MainContactPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MainContactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

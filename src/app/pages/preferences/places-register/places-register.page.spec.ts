import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlacesRegisterPage } from './places-register.page';

describe('PlacesRegisterPage', () => {
  let component: PlacesRegisterPage;
  let fixture: ComponentFixture<PlacesRegisterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlacesRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MusicRegisterPage } from './music-register.page';

describe('MusicRegisterPage', () => {
  let component: MusicRegisterPage;
  let fixture: ComponentFixture<MusicRegisterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MusicRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

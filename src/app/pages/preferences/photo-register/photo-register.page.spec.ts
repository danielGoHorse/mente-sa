import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoRegisterPage } from './photo-register.page';

describe('PhotoRegisterPage', () => {
  let component: PhotoRegisterPage;
  let fixture: ComponentFixture<PhotoRegisterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PhotoRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

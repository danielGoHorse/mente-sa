import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-music-register',
  templateUrl: './music-register.page.html',
  styleUrls: ['./music-register.page.scss'],
})
export class MusicRegisterPage implements OnInit {
  musicForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}

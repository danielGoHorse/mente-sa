import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {

 

  constructor(
    public router: Router,
    private authService: AuthService,
    private shareService: ShareService) {}

    ngAfterViewInit() {
    const currentUser = this.authService.getProfile();
    console.error(currentUser);
  }

  clickButton(action: string){
    this.shareService.changeValue(action)
    // this.utilService.cliquei(action);
  }

  async logout() {
    try {
      this.router.navigate(['/login']);
      await this.authService.singOut();
    } catch (error) {
      console.error(error);
    }
  }

}

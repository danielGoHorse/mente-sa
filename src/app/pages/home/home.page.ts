import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ViewWillEnter } from '@ionic/angular';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/services/auth.service';
import { ShareService } from 'src/app/services/share.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements ViewWillEnter {

  user : User;
  userCurrent: User;


  constructor(
    public router: Router,
    private authService: AuthService,
    private shareService: ShareService,
    private userService: UserService) {
    this.user = new User;
  }

  ionViewWillEnter() {
    this.user = (this.userService.getForm() ? this.userService.getForm() : new User());
  }

  getUser() {
    const userLog = this.userService.getUserById(this.user.id_fire).subscribe(data => {
  
    })

    return;
  }

  clickButton(action: string) {
    this.shareService.changeValue(action)
    // this.utilService.cliquei(action);
  }

  async logout() {
    try {
      await this.authService.singOut();
      this.router.navigate(['/login']);
    } catch (error) {
      console.error(error);
    }
  }

}

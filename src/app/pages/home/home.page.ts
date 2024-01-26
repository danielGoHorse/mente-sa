import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/services/auth.service';
import { ShareService } from 'src/app/services/share.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  user: User;
  userCurrent: User;
 

  constructor(
    public router: Router,
    private authService: AuthService,
    private shareService: ShareService,
    private userService: UserService) {
      this.user = (this.userService.getForm() ? this.userService.getForm() : new User());
      this.userCurrent = this.user
     
    }

    ngOnInit() {
      Object.assign(this.userCurrent);
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

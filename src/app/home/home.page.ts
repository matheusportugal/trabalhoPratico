import { Component } from "@angular/core";
import { LoadingController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { ServicesService } from "./../Services/services.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage  {
  public users = [];
  constructor(private router: Router, public loadingController: LoadingController, public services: ServicesService) {}

  ngOnInit() {
    this.services.get();
    this.getUsers();
  }

  getUsers() {
    setTimeout(async () => {
      const loading = await this.loadingController.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...',
        duration: 2000
      });
      await loading.present();
      this.users = this.services.returnUsers;
      console.log(this.users)
      await loading.onDidDismiss();
    }, 100);
  }

  doRefresh(event) {
    this.users = [];
    setTimeout(() => {
      this.users = this.services.returnUsers;
      event.target.complete();
    }, 2000);
  }

  goToCalc(user) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(user)
      }
    };
    this.router.navigate(['calc-notas'], navigationExtras);
  }
}

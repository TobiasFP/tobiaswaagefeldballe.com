import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-select-skill',
  templateUrl: './select-skill.component.html',
  styleUrls: ['./select-skill.component.scss'],
})
export class SelectSkillComponent implements OnInit {
  constructor(
    private alertCtrl: AlertController,
    public modalController: ModalController,
    private router: Router
  ) {}

  ngOnInit() {}

  thankYouLordINeedTheMoney() {
    this.router.navigateByUrl('/resume');
    this.modalController.dismiss();
  }
  cleverBoy() {
    this.router.navigateByUrl('/resume');
    this.modalController.dismiss();
  }

  showGrace() {
    this.alertCtrl
      .create({
        header: 'Thanks',
      })
      .then((alert) => {
        alert.present();
      });
  }


  closeModal() {
    this.modalController.dismiss();
  }
}

import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-select-skill',
  templateUrl: './select-skill.component.html',
  styleUrls: ['./select-skill.component.scss'],
})
export class SelectSkillComponent implements OnInit {
  constructor(
    private alertCtrl: AlertController,
    public modalController: ModalController
  ) {}

  ngOnInit() {}

  thankYouLordINeedTheMoney() {
    this.modalController.dismiss();
  }
  cleverBoy() {
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
}

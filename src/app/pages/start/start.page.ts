import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SelectSkillComponent } from '../../components/select-skill/select-skill.component';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {
  constructor(private modalCtl: ModalController) {
    const modal = this.modalCtl
      .create({
        component: SelectSkillComponent,
        showBackdrop: true,
        backdropDismiss: true,
        swipeToClose: true,
        keyboardClose: true,
        componentProps: {},
      })
      .then((modal) => {
        modal.present();
      });
  }
  ngOnInit() {}
}

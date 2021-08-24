import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {
  ExplainerComponent,
  tech,
} from '../../components/tellie/explainer/explainer.component';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.page.html',
  styleUrls: ['./resume.page.scss'],
})
export class ResumePage implements OnInit {
  constructor(public modalController: ModalController) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.presentExplainerModal();
  }

  async presentExplainerModal() {
    const tellieDesc = `
    This resume was written in Vue, wrapped as a webcomponent
    and embedded directly into this Ionic/Angular PWA.
    `;

    const techs: Array<tech> = [
      {
        name: 'Vue',
        img: 'vue.png',
      },
      {
        name: 'Web Components',
        img: 'webcomponents.png',
      },
      {
        name: 'Typescript',
        img: 'ts.png',
      },
      {
        name: 'HTML5',
        img: 'html.png',
      },
      {
        name: 'Canvas2d',
        img: 'canvas.png',
      },
    ];

    const modal = await this.modalController.create({
      component: ExplainerComponent,
      showBackdrop: true,
      backdropDismiss: true,
      swipeToClose: true,
      keyboardClose: true,
      componentProps: {
        title: 'What is it?',
        titleIcon: '',
        titleImg: '',
        desc: tellieDesc,
        readMore: 'https://github.com/TobiasFP/vue-webcomponent-resume',
        techs: techs,
      },
    });
    return await modal.present();
  }
}

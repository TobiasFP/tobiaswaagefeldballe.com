import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


export interface tech {
  name: string;
  img: string;
}

@Component({
  selector: 'app-explainer',
  templateUrl: './explainer.component.html',
  styleUrls: ['./explainer.component.scss'],
})
export class ExplainerComponent implements OnInit {
  @Input("title") title: string = "";
  @Input("titleIcon") titleIcon: string = "";
  @Input("titleImg") titleImg: string = "";
  @Input("description") desc: string = "";
  @Input("readMore") readMore: string = "";
  @Input("technologies") techs: Array<tech> = [];

  constructor(
    public modalController: ModalController

  ) { }

  ngOnInit() { }

  closeModal() {
    this.modalController.dismiss();
  }

}

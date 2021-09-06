import { Component, OnInit, NgZone } from '@angular/core';
import { SearchEngineService } from 'src/app/services/search-engine.service';
import { HitList } from '../../classes/hitList';
import { ModalController } from '@ionic/angular';
import {
  ExplainerComponent,
  tech,
} from '../../components/tellie/explainer/explainer.component';

@Component({
  selector: 'app-tellie',
  templateUrl: './tellie.page.html',
  styleUrls: ['./tellie.page.scss'],
})
export class TelliePage implements OnInit {
  public searchQuery: string;
  public hitList: HitList;
  userData: any = {};
  constructor(
    public searchEngineService: SearchEngineService,
    private ngzone: NgZone,
    public modalController: ModalController
  ) {
    this.searchQuery = '';
    this.hitList = {
      status: 'OK',
      Stories: [],
    };
  }

  ionViewDidEnter() {
    this.presentExplainerModal();
  }

  async presentExplainerModal() {
    const tellieDesc = `Tellie is a software that I built from the ground up, 
                        and is really the reason that I entered programming.
                        Tellie is a system that monitors what is being said on 
                        Danish, Norwegian and Swedish television.
                        I do this by extracting data from the live TV feeds by 
                        utilising Raspberry Pi's connected to TV COAX cables 
                        via USB TV tuner cards, scraping captions on teletext pages 
                        for hearing impaired. Try it out by searching in the search field below.!
                        If you are a PR agent/Rep that could use this, our price range is immensely low                       `;

    const techs: Array<tech> = [
      {
        name: 'Golang',
        img: 'go.png',
      },
      {
        name: 'Angular',
        img: 'angular.png',
      },
      {
        name: 'C++',
        img: 'cpp.png',
      },
      {
        name: 'Elasticsearch',
        img: 'elastic.png',
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
        titleImg: 'https://telliegence.tellie.dk/assets/icon/tellie.png',
        desc: tellieDesc,
        readMore: 'https://tellie.dk',
        techs: techs,
      },
    });
    return await modal.present();
  }

  ngOnInit() {}

  onSearch(eventTarget: any) {
    this.searchQuery = eventTarget.value;
    this.search(this.searchQuery);
  }

  search(searchString: string) {
    this.ngzone.run(() => {
      this.searchEngineService.searchData(searchString).subscribe(
        (lines) => {
          this.hitList = lines;
        },
        (err) => {
          console.log('Error connecting?');
          console.log(err);
        }
      );
    });
  }
}

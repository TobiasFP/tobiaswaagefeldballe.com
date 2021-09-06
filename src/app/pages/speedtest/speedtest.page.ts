import { Component, OnInit } from '@angular/core';
import { ExecService } from 'src/app/services/exec.service';

@Component({
  selector: 'app-speedtest',
  templateUrl: './speedtest.page.html',
  styleUrls: ['./speedtest.page.scss'],
})
export class SpeedtestPage implements OnInit {
  timePassedJs: number = 0;
  timePassedWasm: number = 0;
  timePassedGo: number = 0;
  timePassedFortran: number = 0;
  constructor(private exec: ExecService) {}

  ngOnInit() {}

  runJavascript() {
    const beginning = new Date();
    const self = this;
    setTimeout(() => {
      this.speedtestJs(1).then((res) => {
        self.timePassedJs = new Date().getTime() - beginning.getTime();
      });
    }, 300);
  }

  runWasm() {
    const beginning = new Date();
    // @ts-ignore
    speedtest(1);
    this.timePassedWasm = new Date().getTime() - beginning.getTime();
  }
  runGoLang() {
    const beginning = new Date();
    this.exec.runGoLang().subscribe(() => {
      this.timePassedGo = new Date().getTime() - beginning.getTime();
    });
  }
  runFortran() {
    const beginning = new Date();
    this.exec.runFortran().subscribe(() => {
      this.timePassedFortran = new Date().getTime() - beginning.getTime();
    });
  }

  async speedtestJs(iterations: number): Promise<number> {
    let sum: number = 0.0;
    const array_length: number = 100000000;
    const array: Array<number> = [];
    for (let element = 0; element < array_length; element++) {
      array[element] = element;
    }
    for (let iteration = 0; iteration < iterations; iteration++) {
      for (let innerloop = 0; innerloop < 1000000000; innerloop++) {
        sum += array[(iteration + innerloop) % array_length];
      }
    }
    return sum;
  }
}

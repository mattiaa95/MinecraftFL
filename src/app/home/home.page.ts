import { Component } from '@angular/core';

import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';
import { Flashlight } from '@ionic-native/flashlight/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  count:number = 0;
  selected:boolean=true;
  repetido:number = 0;

  constructor(private admobFree: AdMobFree,private flashlight: Flashlight) {
    const addConfig: AdMobFreeBannerConfig = {
      id: 'ca-app-pub-8119907816555669/4784504111',
      isTesting: false,
      autoShow: true
    };

    admobFree.banner.config(addConfig);
    admobFree.banner.prepare();
  }

  ionViewDidEnter(){
    let fondo = document.getElementById("fotContent");
    fondo.className = "on hydrated";
    fondo.className = "off hydrated";
  }

  Switch(){
    let fondo = document.getElementById("fotContent");
    if (!this.flashlight.isSwitchedOn()) {
      this.flashlight.switchOn();
      fondo.className = "on hydrated";
    } else {
      this.flashlight.switchOff();
      fondo.className = "off hydrated";
    }
  }

}


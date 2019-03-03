import { Component } from '@angular/core';

import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  classes:string[] = [
    "one hydrated", "two hydrated", "trw hydrated",
    "fou hydrated", "five hydrated", "six hydrated",
    "sev hydrated", "nin hydrated", "ten hydrated",
    "ele hydrated", "tul hydrated", "thw hydrated",
    "fol hydrated", "fit hydrated", "sit hydrated",
    "ehi hydrated", "twe hydrated", "grw hydrated",
    "dfw hydrated", "ted hydrated"
  ];
  count:number = 0;
  selected:boolean=true;
  repetido:number = 0;

  constructor(private admobFree: AdMobFree) {
    const addConfig: AdMobFreeBannerConfig = {
      id: 'ca-app-pub-8119907816555669/5771138955',
      isTesting: false,
      autoShow: true
    };

    admobFree.banner.config(addConfig);
    admobFree.banner.prepare();
  }

  ionViewDidEnter(){
    let fondo = document.getElementById("fotContent");
    for (let index = 0; index < this.classes.length; index++) {
      fondo.className = this.classes[index];
    }
    fondo.className = "off hydrated";
  }

  Switch() {
    if (this.selected) {
      this.selected = false;
      setTimeout(()=> {
        let fondo = document.getElementById("fotContent");
        let repe = true;
        let number = Math.floor(Math.random() * 20) + 0;  
        while(repe){
          if(number != this.repetido){
            repe = false;  
          }
          number = Math.floor(Math.random() * 20) + 0;
        }
        fondo.className = this.classes[number];
        this.count++;
        this.selected = true;
      }, 485);
    }
  }

}


import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-idade-media',
  templateUrl: './idade-media.page.html',
  styleUrls: ['./idade-media.page.scss'],
})
export class IdadeMediaPage implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  constructor(private menu: MenuController) { }
  openFirst() {
      this.menu.enable(true, 'first');
      this.menu.open('first');
    }

    openEnd() {
      this.menu.open('end');
    }

    openCustom() {
      this.menu.enable(true, 'custom');
      this.menu.open('custom');
    }

}

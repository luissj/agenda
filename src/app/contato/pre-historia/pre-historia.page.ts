import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-pre-historia',
  templateUrl: './pre-historia.page.html',
  styleUrls: ['./pre-historia.page.scss'],
})
export class PreHistoriaPage implements OnInit {
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

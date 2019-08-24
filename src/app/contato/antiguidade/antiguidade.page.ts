import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-antiguidade',
  templateUrl: './antiguidade.page.html',
  styleUrls: ['./antiguidade.page.scss'],
})
export class AntiguidadePage implements OnInit {
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

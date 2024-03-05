import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PublicacionesCreatePage } from '../modules/publicaciones/create/create.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private modalCtrl: ModalController) {}

  async new() {
    const modal = await this.modalCtrl.create({
      component: PublicacionesCreatePage,
      breakpoints: [0, 0.3, 0.5, .95],
      initialBreakpoint: 0.95,
    });
    await modal.present();
  }
}

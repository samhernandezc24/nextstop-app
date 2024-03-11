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

  // EVENTOS
  async btnCreate_clickEvent() {
    const modalRef = await this.modalCtrl.create({
      component: PublicacionesCreatePage,      
    });
    await modalRef.present();
  }
}

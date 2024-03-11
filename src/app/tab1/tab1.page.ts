import { Component } from '@angular/core';
import { PublicacionesService } from '../services/publicaciones/publicaciones.service';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  lstPublicaciones: Array<any> = [];

  constructor(
    private publicacionService: PublicacionesService,
    private loadingCtrl: LoadingController,
  ) {}

  ngOnInit() {
    this.loadPublicaciones();
  }

  async loadPublicaciones(event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
      spinner: 'bubbles',
    });
    await loading.present();

    this.publicacionService.index().subscribe(
      (res) => {
        loading.dismiss();
        this.lstPublicaciones = res;
        event?.target.complete();
      },
      (err) => {
        console.log(err);
        loading.dismiss();
      },  
    );
  }

  loadMore(event: InfiniteScrollCustomEvent) {
    this.loadPublicaciones(event);
  }
}

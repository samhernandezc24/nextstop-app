import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { PublicacionesService } from '@services/publicaciones/publicaciones.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class PublicacionesCreatePage implements OnInit {

  @ViewChild('ngFormGroup', {static: false}) ngFormGroup! : FormGroupDirective;

  formGroup! : FormGroup;

  constructor(private objPublicacionesService: PublicacionesService,
              private modalCtrl: ModalController,
              private toastCtrl: ToastController, 
              private loadingCtrl: LoadingController) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      'pub_titulo' : new FormControl('', [Validators.required]),
    });
  }

  // EVENTOS
  btnGuardar_clickEvent() {
    if (this.formGroup.invalid) {
      this.toastCtrl.create({ message: 'Datos incompletos en el formulario', duration: 2000, position: 'bottom' });
      // this.ngFormGroup.onSubmit(undefined);
      return;
    }

    this.store();
  }

  btnCancel_clickEvent() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  // METODOS
  private store() : void {
    this.loadingCtrl.create({ message: 'Por favor, espere...', duration: 3000 });

    let objPublicacionStore : any = {

    };

    this.objPublicacionesService.store(objPublicacionStore)
    .subscribe(objResponse => {
      if (objResponse.session) {
        if (objResponse.action) {
          // this.toastCtrl.create(objResponse.message, objResponse.title, )
        }
      }
    });
  }

}

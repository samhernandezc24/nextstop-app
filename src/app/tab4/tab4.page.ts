import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicacionesService } from '../services/publicaciones/publicaciones.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  publicacion: any = null;

  constructor(private route: ActivatedRoute, private publicacionService: PublicacionesService) { }

  ngOnInit() {
    const id: string = this.route.snapshot.paramMap.get('id') ?? '';
    this.publicacionService.details(id).subscribe((res) => {
      this.publicacion = res;
    });
  }

}

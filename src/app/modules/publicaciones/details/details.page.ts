import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicacionesService } from '@services/publicaciones/publicaciones.service';
import { register } from 'swiper/element/bundle';

// register Swiper custom elements
register();

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  publicacion: any = null;
  imagenes: string[] = this.generarImagenesAleatorias();

  constructor(private route: ActivatedRoute, private publicacionService: PublicacionesService) { }

  ngOnInit() {
    const id: string = this.route.snapshot.paramMap.get('id') ?? '';
    this.publicacionService.details(id).subscribe((res) => {
      this.publicacion = res;
    });
  }

  onSlideChange(e: any) {
    console.log('changed: ', e);
  }

  generarImagenesAleatorias(): string[] {
    const imagenes: string[] = [];
    const cantidadMaxima = 5; // Máximo 5 imágenes
    for (let i = 0; i < cantidadMaxima; i++) {
      const randomId = Math.floor(Math.random() * 1000); // Genera un ID aleatorio entre 0 y 1000
      const imageUrl = `https://picsum.photos/500/300?random=${randomId}`; // URL de imagen aleatoria de Lorem Picsum
      imagenes.push(imageUrl);
    }
    return imagenes;
  }
}

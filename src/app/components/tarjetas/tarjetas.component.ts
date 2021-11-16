import { Component, Input } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html'
})
export class TarjetasComponent {

  constructor( private router: Router) { }

  @Input() items : any[] = [];

  verArtista ( item: any ){
    let artistaId;

    if( item.type === 'artist'){
      artistaId = item.id;
    }else {
      artistaId = item.artists[0].id
    }
    console.log(`--ARTISTA ID ${ artistaId}`);
    this.router.navigate ( [ '/artist', artistaId ] );
  }

  ngOnInit(): void {
  }

}

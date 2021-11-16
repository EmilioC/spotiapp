import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {

  artista: any = {};
  topTracks: any = {};
  loading: boolean;

  constructor( private router: ActivatedRoute,
               private spotify: SpotifyService ) {
    this.loading = true;
    this.router.params.subscribe ( ( params: any ) =>{
      
      this.getArtista ( params['id'] );
      this.getATopTracks( params ['id']);
      this.loading = false;
    })
   }

   getArtista( id: string ){
    this.loading = true;
    this.spotify.getArtista( id )
        .subscribe( artista =>{
          console.log( artista );
          this.artista = artista;
          this.loading = false;
        })
   }

   getATopTracks( id: string ){
    this.loading = true;
    this.spotify.getTopTracks( id )
        .subscribe( topTracks =>{
          console.log('-TOP-TRACKS');
          console.log( topTracks );
          this.topTracks = topTracks;
          this.loading = false;
        })
   }



}

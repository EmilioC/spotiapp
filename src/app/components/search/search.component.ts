import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];
  loading : Boolean;
  constructor( private spotyfy : SpotifyService) { 
    this.loading = true;
  }

  buscar(termino:string){
    console.log("Insite buscar method");
    
    this.spotyfy.getArtistas( termino )
    .subscribe( (data: any) =>
     { 
      console.log( data); 
      this.artistas = data;
      this.loading = false;   
     } )
  }

  ngOnInit(): void {
  }

}

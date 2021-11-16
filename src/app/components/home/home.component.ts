import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

   nuevasCanciones: any[] = [];
   paises: any[] = [];
   loading: boolean;
   error: boolean;
   errorMessage: string ="";

  constructor( public http: HttpClient, private spotify: SpotifyService) { 
    // this.http.get('https://restcountries.com/v2/lang/es')
    // .subscribe( (resp: any) =>{
    //   this.paises = resp;
    //   // console.log("---CONSTRUCTOR---")
    //   // console.log(this.paises);
    // });
    this.error = false;
    this.loading = true;
    this.spotify.getNewRelease()
      .subscribe ( (data: any) => {
  
        this.nuevasCanciones = data;
        this.loading = false;
        console.log("---NUEVAS CANCIONES []---")
        console.log(data);
      }, ( errorServicio ) => {
        console.log('--ERROR--');
        this.error = true;
        this.loading = false;
        console.log(errorServicio.error.error.message);
        this.errorMessage = errorServicio.error.error.message;
      });
  }
    ngOnInit(): void { }
   
  }
    

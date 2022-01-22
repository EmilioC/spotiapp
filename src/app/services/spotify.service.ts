import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { }
  
  getQuery ( query: string){
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCGTn6Q5TQqf6oGfuN3tbEJSQPs2-ol8g4SwWywF1LYk6JX6uCHlDNThp_GyGP6-l5GgCe8R6J0gIA4KOI'
    });
    return this.http.get(url, { headers });
  }

  getNewRelease(){ 
    return this.getQuery('browse/new-releases')
      .pipe ( map ( ( data: any ) => data['albums'].items));

     // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQCpb12wA_dYeW6k6KGQCrnv6HI4dkntyVXeMAAcmAQofAfSB1GjbJDhtoXQ4f3dEpgkk8NDyph_ZR0_IPc'
    // });      
    // this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers})
    //   .pipe( map( ( data : any )  =>{
    //     return data['albums'].items;
    //   }))
    // ;
  }

  getArtistas (termino:string){
    return this.getQuery(`search?q='${termino}'&type=artist`)
      .pipe ( map ( ( data: any )=> data['artists'].items))

    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQCpb12wA_dYeW6k6KGQCrnv6HI4dkntyVXeMAAcmAQofAfSB1GjbJDhtoXQ4f3dEpgkk8NDyph_ZR0_IPc'
    // });
    // return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist`,{headers})
    //   .pipe ( map ( ( data: any ) => data['artists'].items));
        // Sin abreviar: return data['artists'].items;
  
  }

  getArtista ( id:string ){
    return this.getQuery(`artists/${id}`);
      // .pipe ( map ( ( data: any )=> data['artists'].items))

  }

  getTopTracks ( id:string ){
    return this.getQuery(`artists/${id}/top-tracks?market=ES`)
     .pipe ( map ( ( data: any )=> data['tracks']));

  }
}

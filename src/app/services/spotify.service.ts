import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBh2OgxABGfPdHlFx5mZ2M0USu4w_p8TIbb2Y-CmX7ow6yWG2H7N4G-20I5UoG8426mUSBRUlXh7uJiE30'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers});     
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  private apiRecipesUrl = 'http://localhost:8100/assets/data/Rezepte.json';

  constructor(private http: HttpClient) { }

  getRecipes() {
    return this.http.get(this.apiRecipesUrl);
  }

}

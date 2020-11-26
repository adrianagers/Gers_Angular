import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class InfoService {
    constructor(private http: HttpClient) { }
    
    getInfo(){
        return this.http.get('');
        /**Colocar el link de la API para que el Buscador Funcione https://restcountries.eu/rest/v2/all*/
    }
}
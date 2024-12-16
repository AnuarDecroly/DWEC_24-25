import { inject, Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { ISeries } from '../interfaces/iseries';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  httpClient = inject(HttpClient);
  private baseUrl :string = 'https://peticiones.online/api/series';

  constructor() {  }


  getAllWithObservables(): Observable<ISeries []> {
    return this.httpClient.get<ISeries[]>(this.baseUrl);
  }

  getAllWithPromises() : Promise<ISeries[]> {
    return lastValueFrom(this.httpClient.get<ISeries[]>(this.baseUrl));
  }

  getById(id: string): Promise<ISeries> {
    return lastValueFrom(this.httpClient.get<ISeries>(`${this.baseUrl}/${id}`));
  }

  getByIdObservable(id: string): Observable<ISeries> {
    return this.httpClient.get<ISeries>(`${this.baseUrl}/${id}`);
  }

  insert(serie: ISeries): Promise<ISeries>{
    return lastValueFrom(this.httpClient.post<ISeries>(this.baseUrl, serie));
  }

  update(serie: ISeries): Promise<ISeries>{
    return lastValueFrom(this.httpClient.put<ISeries>(`${this.baseUrl}/${serie._id}`, serie));
  }

  delete(idserie: string) : Promise<ISeries>{
    return lastValueFrom(this.httpClient.delete<ISeries>(`${this.baseUrl}/${idserie}`));
  }


}

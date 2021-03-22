import { Injectable } from '@angular/core';
import { IProcessVm } from '@app/models';
import { HttpWrapperService } from '@app/shared/services';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private http: HttpWrapperService) { }

  process(processVm: IProcessVm): Observable<string> {
    return this.http.post<string>(`${environment.eventApiUrl}/process`, processVm);
  }
}

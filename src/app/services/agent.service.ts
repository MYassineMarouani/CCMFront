import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private http: HttpClient,private endpoint: EndpointService) { }
  login(agent:any) {
    return this.http.post(this.endpoint.url + 'agent/login',agent)
  }
}

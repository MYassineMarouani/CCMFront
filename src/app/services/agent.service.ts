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
  getbyid(id :any) {
    return this.http.get(this.endpoint.url+ 'agent/getbyid/'+id)
  }
  update(id: any, agentnew: any){

    return this.http.put(this.endpoint.url + 'agent/update/' + id , agentnew);

  }
  add(agentdata: any) {
    return this.http.post(this.endpoint.url + 'agent/add', agentdata);
  }
  getall(){
    return this.http.get(this.endpoint.url + 'agent/getall');
  }
  delete(id : any){
    return this.http.delete(this.endpoint.url + 'agent/delete/'+id);
  }
}

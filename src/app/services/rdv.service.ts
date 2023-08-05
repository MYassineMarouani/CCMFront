import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EndpointService } from './endpoint.service';
@Injectable({
  providedIn: 'root'
})
export class RDVService {

  constructor(private http: HttpClient , private endpoint: EndpointService) { }
  add(rdvData: any) {
    return this.http.post(this.endpoint.url + 'RDV/add', rdvData);
  }
  getall(){
    return this.http.get(this.endpoint.url + 'RDV/getall');
  }
  getbyidagent(id :any) {
    return this.http.get(this.endpoint.url+ 'RDV/getbyidagent/'+id)
  }
  getbyid(id :any) {
    return this.http.get(this.endpoint.url+ 'RDV/getbyid/'+id)
  }
  getbynumberbystatus(id :any,status:any) {
    return this.http.get(this.endpoint.url+ 'RDV/count/'+id+"/"+status)
  }
  
}

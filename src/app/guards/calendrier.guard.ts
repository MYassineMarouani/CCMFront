import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CalendrierGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('token');
    const ad = localStorage.getItem('admin');
    if (token || ad) {
      return true;
      
    } else {
      // If there's no token, redirect to 'loginadmin'
      this.router.navigate(['/']);
      Swal.fire("il faut etre connecté")
      return false;
    }
  }
  
}

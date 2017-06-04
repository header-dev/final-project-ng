import { Injectable } from "@angular/core";
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { AuthService } from "app/shared/security/auth.service";


@Injectable()
export class AuthGuard implements CanActivate {


    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> {

        return this.authService.authInfo$
            .map(authInfo => authInfo.isLoggedIn())
            .take(1)
            .do(allowed => {
                if (!allowed) {
                    this.router.navigate(['/login']);
                }
            });
    }

    // canActivate(route: ActivatedRouteSnapshot,
    //     state: RouterStateSnapshot): Observable<boolean> {

    //     return this.authService.authInfo$
    //         .map(authInfo => authInfo.isLoggedIn())
    //         .take(1)
    //         .do(allowed => {
    //             if (!allowed) {
    //                 this.router.navigate(['/login']);
    //             }
    //         });

    // }

}
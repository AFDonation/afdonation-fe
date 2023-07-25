import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { StorageKey } from "../core/models/storage-keys.enum";
import { StorageService } from "../core/services/storage.service";

@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {
    constructor(private readonly _storageService: StorageService, private readonly _router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const jwt = this._storageService.getStringFromStorage(StorageKey.JwtToken);

        if (jwt) {
            return true;
        } else {
            this._router.navigate(['login']);
            return false;
        }
    }
}
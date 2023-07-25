import { ChangeDetectionStrategy, Component } from "@angular/core";
import { StorageService } from '../../core/services/storage.service';
import { StorageKey } from '../../core/models/storage-keys.enum';
import { Router } from "@angular/router";

@Component({
    selector: 'ns-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
    constructor(private readonly _storageService: StorageService, private readonly _router: Router) { }

    public login(): void {
        this._storageService.setStringToStorage('myJwtToken', StorageKey.JwtToken);
        this._router.navigate(['/']);
    }

    public clearStorage(): void {
        this._storageService.removeStringFromStorage(StorageKey.JwtToken);
        this._router.navigate(['/']);
    }
}
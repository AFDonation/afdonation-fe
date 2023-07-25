import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageKey } from '../core/models/storage-keys.enum';
import { StorageService } from '../core/services/storage.service';

@Component({
    selector: 'ns-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
    constructor(private readonly _storageService: StorageService, private readonly _router: Router) { }

    public reload(): void {
        this._router.navigate(['/'])
    }

    public clearJwt(): void {
        this._storageService.removeStringFromStorage(StorageKey.JwtToken);
        this._router.navigate(['/']);
    }
}
import { Injectable } from "@angular/core";
import { getString, setString, remove } from "@nativescript/core/application-settings";
import { StorageKey } from "../models/storage-keys.enum";

@Injectable({ providedIn: 'root' })
export class StorageService {
    public setStringToStorage(data: string, key: StorageKey): void {
        setString(key, data);
    }

    public getStringFromStorage(key: StorageKey): string {
        return getString(key);
    }

    public removeStringFromStorage(key: StorageKey): void {
        remove(key);
    }
}
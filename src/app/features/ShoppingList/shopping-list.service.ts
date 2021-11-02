import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingridient } from '../../shared/ingridient.model';

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {
    ingridientsChanged = new Subject<Ingridient[]>();

    private ingridients: Ingridient[] = [];

    get ingridientsList(): Ingridient[] {
        return [...this.ingridients];
    }

    public addIngridient(ingridient: Ingridient | Ingridient[]): void {
        if (Array.isArray(ingridient)) {
            this.ingridients.push(...ingridient);
        } else {
            this.ingridients.push(ingridient);
        }
        this.ingridientsChanged.next([...this.ingridients]);
    }
}

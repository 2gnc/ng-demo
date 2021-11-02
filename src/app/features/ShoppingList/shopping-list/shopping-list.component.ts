import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingridient } from '../../../shared/ingridient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingridientsList: Ingridient[] = [];
  ingridientsSubscription: Subscription;

  constructor(
    private shoppingListService: ShoppingListService
  ) { }

  ngOnInit(): void {
    this.ingridientsList = this.shoppingListService.ingridientsList;
    this.ingridientsSubscription = this.shoppingListService.ingridientsChanged.subscribe((changes: Ingridient[]) => {
      this.ingridientsList = changes;
    })
  }

  ngOnDestroy(): void {
    this.ingridientsSubscription.unsubscribe();
  }
}

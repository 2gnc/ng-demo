import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingridient } from '../../../shared/ingridient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInpitRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;

  constructor(
    private shoppingListService: ShoppingListService
  ) { }

  ngOnInit(): void {
  }

  onAddItem() {
    this.shoppingListService.addIngridient(
      new Ingridient(
        this.nameInpitRef.nativeElement.value,
        this.amountInputRef.nativeElement.value
      )
    );
    this.nameInpitRef.nativeElement.value = '';
    this.amountInputRef.nativeElement.value = undefined;
  }
}

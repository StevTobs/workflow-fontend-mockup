import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemService } from '../item/item.service';
import { Item } from '../models/item';
import { Router, ActivatedRoute } from '@angular/router';
// import { HomeModule } from '../home/home.module';
@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css'],
})
export class ItemFormComponent implements OnInit {
  itemForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private itemService: ItemService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.itemForm = this.formBuilder.group({
      title: ['', Validators.required],
      amount: ['', Validators.required],
      quantity: ['', Validators.required],
    });

    //Update/Edit an existing item by id
    let id = this.activatedRoute.snapshot.params['id'];

    if (id) {
      let item = this.itemService.getItem(id);
      if (item) {
        this.itemForm.patchValue(item);
      }
    }
  }

  onSubmit(): void {
    if (this.itemForm.valid) {
      let item: Item = this.itemForm.value;
      let id = this.activatedRoute.snapshot.params['id'];

      if (id) {
        //update an existing item
        this.itemService.updateItem(id, item);
      } else {
        //create a new item
        this.itemService.addItem(item);
      }

      // Redirect to item list component
      this.router.navigate(['/list']);
    }
  }
  onCancel(): void {
    this.itemForm.reset();
  }
}

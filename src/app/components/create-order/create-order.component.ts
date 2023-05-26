import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent {
  // order
  nameFC: FormControl = new FormControl(null, Validators.required);
  emailFC: FormControl = new FormControl(null, Validators.required);
  // CC
  numberFC: FormControl = new FormControl(null, Validators.required);
  expirationFC: FormControl = new FormControl(null, Validators.required);
  cvvFC: FormControl = new FormControl(null, Validators.required);
  ownerFC: FormControl = new FormControl(null, Validators.required);
  // Address
  streetFC: FormControl = new FormControl(null, Validators.required);
  cityFC: FormControl = new FormControl(null, Validators.required);
  stateFC: FormControl = new FormControl(null, Validators.required);
  zipFC: FormControl = new FormControl(null, Validators.required);
  countryFC: FormControl = new FormControl(null, Validators.required);

  orderFormGroup: FormGroup = new FormGroup(
    {
      name: this.nameFC,
      email: this.emailFC,
      number: this.numberFC,
      expiration: this.expirationFC,
      cvv: this.cvvFC,
      owner: this.ownerFC,
      street: this.streetFC,
      city: this.cityFC,
      state: this.stateFC,
      zip: this.zipFC,
      country: this.countryFC
    }
  )

  onSubmit(){}
}

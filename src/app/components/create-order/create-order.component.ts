import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Address, CCard, Order} from "../../model/Order";

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

  onSubmit(): void{
    let order = this.getFormOrder();
    order.address = this.getFormOrderAddress();
    order.cCard = this.getFormOrderCC();
    console.log(order);
  }

  private getFormOrderCC(): CCard {
    let cc : CCard = new CCard();
    cc.owner = this.ownerFC.value;
    cc.number = this.numberFC.value;
    cc.expiration = this.expirationFC.value;
    cc.cvv = this.cvvFC.value;
    return cc;
  }

  private getFormOrderAddress(): Address {
    let addr: Address = new Address();
    addr.street = this.streetFC.value;
    addr.city = this.cityFC.value;
    addr.zip = this.zipFC.value;
    addr.state = this.stateFC.value;
    addr.country = this.countryFC.value;
    return addr;
  }

  private getFormOrder(): Order {
    let order: Order = new Order();
    order.email = this.emailFC.value;
    order.name = this.nameFC.value;
    return order;
  }
}

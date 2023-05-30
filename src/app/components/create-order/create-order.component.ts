import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Address, CCard, Order} from "../../model/Order";
import * as cardValidator from "card-validator";
import {OrderService} from "../../services/order.service";

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent {
  // order
  nameFC: FormControl = new FormControl('Test order', [Validators.required, Validators.pattern('^[a-zA-Z0-9\\s]{3,25}$')]);
  emailFC: FormControl = new FormControl('dev@hotmail.com', [Validators.required, Validators.email]);
  // CC
  numberFC: FormControl = new FormControl('5555555555554444', [Validators.required, this.validateCard]);
  expirationFC: FormControl = new FormControl('10/24', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])([\\/])([1-9][0-9])$')]);
  cvvFC: FormControl = new FormControl(149, [Validators.required, Validators.minLength(3), Validators.maxLength(3)]);
  ownerFC: FormControl = new FormControl('Rouslan Khayaouri', [Validators.required, Validators.pattern('^([a-zA-Z]{2,}\\s[a-zA-Z]{1,}\'?-?[a-zA-Z]{2,}\\s?([a-zA-Z]{1,})?)'), Validators.maxLength(30), Validators.minLength(4)]);
  // Address
  streetFC: FormControl = new FormControl('mystreet 123', [Validators.required, Validators.pattern('^[a-zA-Z0-9\\s]{3,35}$')]);
  cityFC: FormControl = new FormControl('emlem', [Validators.required, Validators.pattern('^[a-zA-Z]{3,25}$')]);
  stateFC: FormControl = new FormControl('awerp', [Validators.required, Validators.pattern('^[a-zA-Z]{3,25}$')]);
  zipFC: FormControl = new FormControl('2430', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{3,15}$')]);
  countryFC: FormControl = new FormControl('Belgium', [Validators.required, Validators.pattern('^[a-zA-Z]{3,25}$')]);

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

  constructor(private service: OrderService) {
  }

  onSubmit(): void{
    let order = this.getFormOrder();
    order.address = this.getFormOrderAddress();
    order.cCard = this.getFormOrderCC();
    this.service.submitOrder(order).subscribe(summary => {
      console.log(summary);
    })
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

  private   validateCard(control: AbstractControl): { [key: string]: boolean } | null {
    const numberValidation = cardValidator.number(control.value);
    if (!numberValidation.isValid) {
      return {'invalidCard': true}
    }
    return null;
  }
}

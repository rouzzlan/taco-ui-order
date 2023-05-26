export class Order {
  public name: string | undefined;
  public email: string | undefined;
  public cCard: CCard | undefined;
  public address: Address | undefined;
}

export class CCard {
  public number: string | undefined;
  public owner: string | undefined;
  public expiration: string | undefined;
  public cvv: number | undefined;
}

export class Address {
  public street: string | undefined;
  public city: string | undefined;
  public state: string | undefined;
  public zip: string | undefined;
  public country: string | undefined;
}

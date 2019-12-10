export class Address {
  country: string = '';
  city: string = '';
  street: string = '';
  zip: number = 0;

  toString() {
    return `${this.street}, ${this.city}, ${this.zip}, ${this.country}`;
  }
}

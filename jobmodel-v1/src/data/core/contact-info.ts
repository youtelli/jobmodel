import { ContactType } from './contact-type';

export class ContactInfo {

  // In case there multiple contacts for a given person/company ???
  contactId: number = 0;

  // TBD: maximum lengths for name and value????
  constructor(public name: (string | null) = null,
    public value: (string | null) = null,   // phone number, email, address, ...
    public type: ContactType = ContactType.unknown,
    public isVerified: boolean = false) {
    // ....
  }


  toString(): string {
    let str = '';
    str += `name:${this.name};`;
    str += `value:${this.value};`;
    str += `type:${this.type};`;
    str += `isVerified:${this.isVerified}`;
    return str;
  }

  clone(): ContactInfo {
    let cloned = Object.assign(new ContactInfo(), this) as ContactInfo;
    return cloned;
  }
  static clone(obj: any): ContactInfo {
    let cloned = Object.assign(new ContactInfo(), obj) as ContactInfo;
    return cloned;
  }

  copy(): ContactInfo {
    let obj = this.clone();
    // obj.contactId = 0;  // ???
    return obj;
  }

}

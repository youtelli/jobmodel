import { UniqueIdUtil } from '@ngcore/core';
import { BaseModel } from '@ngcore/base';


// Public user profile...
export class UserProfile extends BaseModel {

  // Title?
  public title: (string | null) = null;
  // get title(): string {
  //   return this._title;
  // }
  setTitle(_title: string) {
    this.title = _title;
    this.isDirty = true;
  }


  // ...


  public phoneNumber: (string | null) = null;
  setPhoneNumber(_phoneNumber: string) {
    this.phoneNumber = _phoneNumber;
    this.isDirty = true;
  }

  public emailAddress: (string | null) = null;
  setEmailAddress(_emailAddress: string) {
    this.emailAddress = _emailAddress;
    this.isDirty = true;
  }

  // Home address
  // etc. ...


  // Current job
  // employment history
  // ...


  // isDeleted?
  // isHidden?
  public isHidden: boolean = false;
  // getIsHidden(): boolean { return this.isHidden; }
  setIsHidden(_isHidden: boolean) { this.isHidden = _isHidden; this.isDirty = true; }


  constructor() {
    super();
  }


  toString(): string {
    return super.toString()
      + '; title = ' + this.title
      + '; phoneNumber = ' + this.phoneNumber
      + '; emailAddress = ' + this.emailAddress
      + '; isHidden = ' + this.isHidden;
  }


  clone(): UserProfile {
    let cloned = Object.assign(new UserProfile(), this) as UserProfile;
    return cloned;
  }
  static clone(obj: any): UserProfile {
    let cloned = Object.assign(new UserProfile(), obj) as UserProfile;
    return cloned;
  }

  copy(): UserProfile {
    let obj = this.clone();
    // obj.id = RandomIdUtil.id();
    obj.id = UniqueIdUtil.id();
    obj.resetCreatedTime();
    return obj;
  }
}

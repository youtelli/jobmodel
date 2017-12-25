import { UniqueIdUtil } from '@ngcore/core';
import { BaseModel } from '@ngcore/base';


export class UserPreference extends BaseModel {

  // Title?
  public title: (string | null) = null;
  // get title(): string {
  //   return this._title;
  // }
  setTitle(_title: string) {
    this.title = _title;
    this.isDirty = true;
  }


  // set of resumes
  // default resume
  // cover letters..
  // contact info...
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

  // Mailing address
  // ..



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


  clone(): UserPreference {
    let cloned = Object.assign(new UserPreference(), this) as UserPreference;
    return cloned;
  }
  static clone(obj: any): UserPreference {
    let cloned = Object.assign(new UserPreference(), obj) as UserPreference;
    return cloned;
  }

  copy(): UserPreference {
    let obj = this.clone();
    // obj.id = RandomIdUtil.id();
    obj.id = UniqueIdUtil.id();
    obj.resetCreatedTime();
    return obj;
  }
}

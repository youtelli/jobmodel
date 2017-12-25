import { UniqueIdUtil } from '@ngcore/core';
import { BaseModel } from '@ngcore/base';


export class JobFollowup extends BaseModel {

  // Title?
  public title: (string | null) = null;
  // get title(): string {
  //   return this._title;
  // }
  setTitle(_title: string) {
    this.title = _title;
    this.isDirty = true;
  }

  // follow up
  // phone screening
  // interview
  // ...


  // TBD:
  // Use a list of "followup" class
  // ...

  public followup: (string | null) = null;
  setFollowup(_followup: string) {
    this.followup = _followup;
    this.isDirty = true;
  }




  // isDeleted?
  // isHidden?
  public isHidden: boolean = false;
  // getIsHidden(): boolean { return this.isHidden; }
  setIsHidden(_isHidden: boolean) { this.isHidden = _isHidden; this.isDirty = true; }


  // public jobId: string = null
  // // getJobId(): string { return this._jobId; }
  // setJobId(_jobId: string) { this.jobId = _jobId; this.isDirty = true; }

  // // Note target date in dateId format. (Based on createdTime? No.)
  // // To be used only when jobId == null.
  // public jobDate: string;

  constructor() {
    super();
  }


  toString(): string {
    return super.toString()
      + '; title = ' + this.title
      + '; followup = ' + this.followup
      + '; isHidden = ' + this.isHidden;
  }


  clone(): JobFollowup {
    let cloned = Object.assign(new JobFollowup(), this) as JobFollowup;
    return cloned;
  }
  static clone(obj: any): JobFollowup {
    let cloned = Object.assign(new JobFollowup(), obj) as JobFollowup;
    return cloned;
  }

  copy(): JobFollowup {
    let obj = this.clone();
    // obj.id = RandomIdUtil.id();
    obj.id = UniqueIdUtil.id();
    obj.resetCreatedTime();
    return obj;
  }
}

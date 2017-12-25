import { UniqueIdUtil } from '@ngcore/core';
import { BaseModel } from '@ngcore/base';

import { ApplicationStatus } from '../core/application-status';


export class JobApplication extends BaseModel {

  // Title?
  public title: (string | null) = null;
  // get title(): string {
  //   return this._title;
  // }
  setTitle(_title: string) {
    this.title = _title;
    this.isDirty = true;
  }

  // jobId???

  public appliedStatus: ApplicationStatus = ApplicationStatus.unknown;
  setAppliedStatus(_appliedStatus: ApplicationStatus) {
    this.appliedStatus = _appliedStatus;
    this.isDirty = true;
  }

  // application date. TBD: Use a timestamp?
  public appliedDate: (string | null) = null;
  setAppliedDate(_appliedDate: string) {
    this.appliedDate = _appliedDate;
    this.isDirty = true;
  }


  // application method
  //    email, web, etc.
  // Application url/email, .. ???
  // Contact name, ...
  // ...
  

  // resume used
  // cover letter
  // ...

  // Actual content vs "reference" ???
  // e.g., "resumeId" ???
  public resume: (string | null) = null;
  setResume(_resume: string) {
    this.resume = _resume;
    this.isDirty = true;
  }

  // Actual content vs "reference" ???
  public coverLetter: (string | null) = null;
  setCoverLetter(_coverLetter: string) {
    this.coverLetter = _coverLetter;
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
      + '; appliedDate = ' + this.appliedDate
      + '; resume = ' + this.resume
      + '; coverLetter = ' + this.coverLetter
      + '; isHidden = ' + this.isHidden;
  }


  clone(): JobApplication {
    let cloned = Object.assign(new JobApplication(), this) as JobApplication;
    return cloned;
  }
  static clone(obj: any): JobApplication {
    let cloned = Object.assign(new JobApplication(), obj) as JobApplication;
    return cloned;
  }

  copy(): JobApplication {
    let obj = this.clone();
    // obj.id = RandomIdUtil.id();
    obj.id = UniqueIdUtil.id();
    obj.resetCreatedTime();
    return obj;
  }
}

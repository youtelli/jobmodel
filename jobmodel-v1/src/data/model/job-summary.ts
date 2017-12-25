import { UniqueIdUtil } from '@ngcore/core';
import { BaseModel } from '@ngcore/base';

import { ApplicationStatus } from '../core/application-status';


export class JobSummary extends BaseModel {

  // Title?
  public title: (string | null) = null;
  // get title(): string {
  //   return this._title;
  // }
  setTitle(_title: string) {
    this.title = _title;
    this.isDirty = true;
  }


  public appliedStatus: ApplicationStatus = ApplicationStatus.unknown;
  setAppliedStatus(_appliedStatus: ApplicationStatus) {
    this.appliedStatus = _appliedStatus;
    this.isDirty = true;
  }

  // What is "summary"???
  public summary: (string | null) = null;
  setSummary(_summary: string) {
    this.summary = _summary;
    this.isDirty = true;
  }


  // Position name?
  public position: (string | null) = null;
  public setPosition(_position: string) {
    this.position = _position;
    this.isDirty = true;
  }

  public employerName: (string | null) = null;
  public setEmployerName(_employerName: string) {
    this.employerName = _employerName;
    this.isDirty = true;
  }

  // tbd:
  // followup "to do"
  // etc.
  // ...




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
      + '; summary = ' + this.summary
      + '; isHidden = ' + this.isHidden;
  }


  clone(): JobSummary {
    let cloned = Object.assign(new JobSummary(), this) as JobSummary;
    return cloned;
  }
  static clone(obj: any): JobSummary {
    let cloned = Object.assign(new JobSummary(), obj) as JobSummary;
    return cloned;
  }

  copy(): JobSummary {
    let obj = this.clone();
    // obj.id = RandomIdUtil.id();
    obj.id = UniqueIdUtil.id();
    obj.resetCreatedTime();
    return obj;
  }
}

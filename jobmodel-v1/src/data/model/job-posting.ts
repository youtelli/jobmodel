import { UniqueIdUtil } from '@ngcore/core';
import { BaseModel } from '@ngcore/base';

import { JobType } from '../core/job-type';
import { ContactType } from '../core/contact-type';
import { ContactInfo } from '../core/contact-info';


export class JobPosting extends BaseModel {

  // public postingUrl: (string | null) = null;
  public setPostingUrl(_postingUrl: string) {
    this.postingUrl = _postingUrl;
    this.isDirty = true;
  }
  // public jobId: string = null
  // // getJobId(): string { return this._jobId; }
  // setJobId(_jobId: string) { this.jobId = _jobId; this.isDirty = true; }

  // Posting id for a given job site, if any.
  public postingId: (string | null) = null;
  public setPostingId(_postingId: string) {
    this.postingId = _postingId;
    this.isDirty = true;
  }

  // original Posted date? (tbd: Just use date or time/timestamp?)
  public postingDate: (string | null) = null;
  public setPostingDate(_postingDate: string) {
    this.postingDate = _postingDate;
    this.isDirty = true;
  }

  // Job posting site (e.g., monster, dice, craigslist, ..)
  // Use enum? Or, just use string? (string -> a bit more open-ended)
  public jobSite: (string | null) = null;
  public setJobSite(_jobSite: string) {
    this.jobSite = _jobSite;
    this.isDirty = true;
  }

  // posting title.
  public title: (string | null) = null;
  public setTitle(_title: string) {
    this.title = _title;
    this.isDirty = true;
  }

  // Position name?
  public position: (string | null) = null;
  public setPosition(_position: string) {
    this.position = _position;
    this.isDirty = true;
  }

  // full time vs contract...
  public jobType: JobType = JobType.unknown;
  setJobType(_jobType: JobType) {
    this.jobType = _jobType;
    this.isDirty = true;
  }

  // ????
  // E.g., "$10,000/year", "$50/hour", etc...
  // Or, range like "$30~$50/hour", etc...
  public salary: (string | null) = null;
  setsalary(_salary: string) {
    this.salary = _salary;
    this.isDirty = true;
  }


  public employerName: (string | null) = null;
  public setEmployerName(_employerName: string) {
    this.employerName = _employerName;
    this.isDirty = true;
  }

  // Location/address ??
  // Use full address?
  // Or, at least use city/state?
  // Metro means general metropolitan area (like Orange county, "LA", etc..)
  public metro: (string | null) = null;
  public setMetro(_metro: string) {
    this.metro = _metro;
    this.isDirty = true;
  }


  // application url? (if different from posting url?)
  public appyLink: (string | null) = null;
  public setAppyLink(_appyLink: string) {
    this.appyLink = _appyLink;
    this.isDirty = true;
  }

  // TBD: ContactInfo should really include multiple contact infos for the same person/name ????
  public contactEmail: ContactInfo = null;
  public setContactEmail(_contactEmail: ContactInfo) {
    this.contactEmail = _contactEmail;
    this.isDirty = true;
  }
  public contactPhone: ContactInfo = null;
  public setContactPhone(_contactPhone: ContactInfo) {
    this.contactPhone = _contactPhone;
    this.isDirty = true;
  }

  // TBD:
  // application deadline ???
  // etc...
  // ...



  // isDeleted?
  // isHidden?
  // isValid?
  public isExpired: boolean = false;
  setIsExpired(_isExpired: boolean) { this.isExpired = _isExpired; this.isDirty = true; }


  constructor(public postingUrl: (string | null) = null) {
    super();
    if (postingUrl) {   // ???
      this.isDirty = true;
    }
  }


  toString(): string {
    return super.toString()
      + '; postingUrl = ' + this.postingUrl
      + '; postingId = ' + this.postingId
      + '; postingDate = ' + this.postingDate
      + '; jobSite = ' + this.jobSite
      + '; title = ' + this.title
      + '; position = ' + this.position
      + '; employerName = ' + this.employerName
      + '; metro = ' + this.metro
      + '; appyLink = ' + this.appyLink
      + '; contactEmail = ' + this.contactEmail
      + '; contactPhone = ' + this.contactPhone
      + '; isExpired = ' + this.isExpired;
  }


  clone(): JobPosting {
    let cloned = Object.assign(new JobPosting(), this) as JobPosting;
    if (this.contactEmail) cloned.contactEmail = Object.assign(new ContactInfo(), this.contactEmail) as ContactInfo;
    if (this.contactPhone) cloned.contactPhone = Object.assign(new ContactInfo(), this.contactPhone) as ContactInfo;
    return cloned;
  }
  static clone(obj: any): JobPosting {
    let cloned = Object.assign(new JobPosting(), obj) as JobPosting;
    if (obj.contactEmail) cloned.contactEmail = Object.assign(new ContactInfo(), obj.contactEmail) as ContactInfo;
    if (obj.contactPhone) cloned.contactPhone = Object.assign(new ContactInfo(), obj.contactPhone) as ContactInfo;
    return cloned;
  }

  copy(): JobPosting {
    let obj = this.clone();
    // obj.id = RandomIdUtil.id();
    obj.id = UniqueIdUtil.id();
    obj.resetCreatedTime();
    return obj;
  }
}

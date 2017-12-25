import { RGBColor, ColorTag, ColorTagUtil, UniqueIdUtil, DateIdUtil, DateTimeUtil, RandomIdUtil, HourRange } from '@ngcore/core';
// import { BaseModel, AppUser } from '@canvuus-internal/mvp0-job-base';
import { MediaType, MediaAttachment } from '@ngcore/base';
import { PostingStatus } from '../core/posting-status';
import { ApplicationStatus } from '../core/application-status';
import { JobBase } from '../base/job-base';

import { JobSummary } from './job-summary';
import { JobPosting } from './job-posting';
import { JobApplication } from './job-application';
import { JobFollowup } from './job-followup';
import { JobMemo } from './job-memo';


export class JobRecord extends JobBase {

  public static compareAscending(a: JobRecord, b: JobRecord): number {
    // tbd: check status first before targetDate ????
    if (a.targetDate == b.targetDate) {
      if (a.postingStatus == b.postingStatus) {
        if (a.priority == b.priority) {
          return a.createdTime - b.createdTime;
        } else {
          return b.priority - a.priority;   // Note the reverse order.
        }
      } else {
        return -(a.postingStatus - b.postingStatus);   // resolved jobs come first.
      }
    } else {
      if(a.targetDate == null) {
        return -1;
      } else if(b.targetDate == null) {
        return 1;
      } else {
        return parseInt(a.targetDate) - parseInt(b.targetDate);
      }
    }
  }
  public static compareDecending(a: JobRecord, b: JobRecord): number {
    if (a.targetDate == b.targetDate) {
      if (a.postingStatus == b.postingStatus) {
        if (a.priority == b.priority) {
          return b.createdTime - a.createdTime;
        } else {
          return b.priority - a.priority;   // Note the order. Same as compareAscending().
        }
      } else {
        return -(b.postingStatus - a.postingStatus);  // newer jobs come first.
      }
    } else {
      if(b.targetDate == null) {
        return -1;
      } else if(a.targetDate == null) {
        return 1;
      } else {
        return parseInt(b.targetDate) - parseInt(a.targetDate);
      }
    }
  }


  // tbd:


  public jobId: (string | null) = null;
  setJobId(_jobId: string) {
    this.jobId = _jobId;
    this.isDirty = true;
  }


  colorTagLabel: string;
  get colorTag(): ColorTag {
    return ColorTag.fromString(this.colorTagLabel);
  }
  set colorTag(_colorTag: ColorTag) {
    this.colorTagLabel = _colorTag.toString();
  }
  get ctag(): string {
    return this.colorTagLabel;
  }


  public targetDate: (string | null) = null;
  // getTargetDate(): string { return this.targetDate; }
  setTargetDate(_targetDate: (string | null)) {
    this.targetDate = _targetDate;
    this.isDirty = true;
  }
  removeTargetDate(): void {
    // temporary
    this.setTargetDate(null);   // ????
  }

  get isForToday(): boolean {
    return (this.targetDate != null) && (this.targetDate == DateIdUtil.getTodayId());
  }


  public postingStatus: PostingStatus = PostingStatus.unknown;
  // getStatus(): PostingStatus { return this.status; }
  setPostingStatus(_status: PostingStatus) { this.postingStatus = _status; this.isDirty = true; }

  public applicationStatus: ApplicationStatus = ApplicationStatus.unknown;
  // getStatus(): ApplicationStatus { return this.status; }
  setApplicationStatus(_status: ApplicationStatus) { this.applicationStatus = _status; this.isDirty = true; }


  // Testing...

  private _jobSummary: JobSummary;
  public get jobSummary(): JobSummary {
    return this._jobSummary;
  }

  private _jobPosting: JobPosting;
  public get jobPosting(): JobPosting {
    return this._jobPosting;
  }

  private _jobApplication: JobApplication;
  public get jobApplication(): JobApplication {
    return this._jobApplication;
  }

  private _jobFollowup: JobFollowup;
  public get jobFollowup(): JobFollowup {
    return this._jobFollowup;
  }

  private _jobMemo: JobMemo;
  public get jobMemo(): JobMemo {
    return this._jobMemo;
  }


  public get isRecordDirty(): boolean {
    if(this.isDirty
      || this.jobSummary.isDirty
      || this.jobPosting.isDirty
      || this.jobApplication.isDirty
      || this.jobFollowup.isDirty
      || this.jobMemo.isDirty) {
        return true;
      } else {
        return false;
      }
  }

  public isFavorite: boolean = false;
  // getIsFavorite(): boolean { return this.isFavorite; }
  setIsFavorite(_isFavorite: boolean) { this.isFavorite = _isFavorite; this.isDirty = true; }


  constructor(public title: (string | null) = null,
    public description: (string | null) = null,
    public importance: number = 0,
    public urgency: number = 0,
    public difficulty: number = 0
  ) {
    super(title, description, importance, urgency, difficulty);

    this.targetDate = null;
    this.colorTagLabel = ColorTagUtil.randomColorTag().toString();
    // this.status = PostingStatus.ready;    // Always start as ready ???? --> No. let the caller set it explicitly.
 
    // tbd...
    this._jobSummary = new JobSummary();
    this._jobPosting = new JobPosting();
    this._jobApplication = new JobApplication();
    this._jobFollowup = new JobFollowup();
    this._jobMemo = new JobMemo();
    // ... 
 
  }

  // temporary
  private static DEFAULT_SHORT_TITLE_LENGTH: number = 10;
  // get shortTitle(): string {
  // }
  getShortTitle(length: number = JobRecord.DEFAULT_SHORT_TITLE_LENGTH): string {
    let shortTitle = '';
    if (this.title) {
      if (this.title.length > length) {
        shortTitle = this.title.substring(0, length - 2) + '..';
      } else {
        shortTitle = this.title;
      }
    } else {
      // ???
      shortTitle = (this.targetDate != null) ? this.targetDate : '';  // length == 8 | 0
    }
    return shortTitle;
  }


  // get isActive(): boolean {
  //   return (this.status != PostingStatus.deleted && this.deletedTime == 0)
  //     && (this.status == PostingStatus.ready || this.status == PostingStatus.doing);
  // }
  // get isDone(): boolean {
  //   return (this.status != PostingStatus.deleted && this.deletedTime == 0)
  //     && (this.status == PostingStatus.done);
  // }
  // get isPostponed(): boolean {
  //   return (this.status != PostingStatus.deleted && this.deletedTime == 0)
  //     && (this.status == PostingStatus.postponed);
  // }
  // get isResolved(): boolean {
  //   return (this.status != PostingStatus.deleted && this.deletedTime == 0)
  //     && (this.status == PostingStatus.done || this.status == PostingStatus.incomplete || this.status == PostingStatus.postponed);
  // }


  // For now,
  // JobRecord can have only one audio attachment.

  // testing
  private static ATTACHMENT_NAME_VOICE_MEMO: string = "_quickjob_voice_memo";
  storeVoiceMemo(_data: any) {
    let attach = new MediaAttachment(null, this.userId);
    attach.name = JobRecord.ATTACHMENT_NAME_VOICE_MEMO;
    attach.mediaType = MediaType.audio;
    // attach.contentType = ???
    attach.data = _data;  // ???
    if (!this.attachments) this.attachments = {};
    this.attachments[JobRecord.ATTACHMENT_NAME_VOICE_MEMO] = attach;
  }
  // fetchVoiceMemo(): any {
  //   let blob: any = null;
  //   if(this.hasAudioAttachment(JobRecord.ATTACHMENT_NAME_VOICE_MEMO)) {
  //     let attach = this.attachments[JobRecord.ATTACHMENT_NAME_VOICE_MEMO];
  //     blob = attach.data;  // ???
  //   }
  //   // content type ???
  //   return blob;
  // }
  fetchVoiceMemo(): (MediaAttachment | null) {
    let attach: (MediaAttachment | null) = null;
    if(this.hasAudioAttachment(JobRecord.ATTACHMENT_NAME_VOICE_MEMO)) {
      attach = this.attachments[JobRecord.ATTACHMENT_NAME_VOICE_MEMO];
    }
    return attach;
  }
  get hasVoiceMemo(): boolean {
    return (this.hasAudioAttachment(JobRecord.ATTACHMENT_NAME_VOICE_MEMO));
  }
  // testing



  toString(): string {
    let str = super.toString()
      + '; colorTag = ' + this.colorTagLabel
      + '; targetDate = ' + this.targetDate
      + '; postingStatus = ' + this.postingStatus
      + '; applicationStatus = ' + this.applicationStatus
      + '; isFavorite = ' + this.isFavorite;
      
    return str;
  }

  clone(): JobRecord {
    let cloned = Object.assign(new JobRecord(), this) as JobRecord;
    // if(cloned.colorTag) cloned.colorTag = cloned.colorTag.clone();
    if (this.jobSummary) cloned._jobSummary = Object.assign(new JobSummary(), this.jobSummary) as JobSummary;
    if (this.jobPosting) cloned._jobPosting = Object.assign(new JobPosting(), this.jobPosting) as JobPosting;
    if (this.jobApplication) cloned._jobApplication = Object.assign(new JobApplication(), this.jobApplication) as JobApplication;
    if (this.jobFollowup) cloned._jobFollowup = Object.assign(new JobFollowup(), this.jobFollowup) as JobFollowup;
    if (this.jobMemo) cloned._jobMemo = Object.assign(new JobMemo(), this.jobMemo) as JobMemo;
    return cloned;
  }
  static clone(obj: any): JobRecord {
    let cloned = Object.assign(new JobRecord(), obj) as JobRecord;
    // if(obj.colorTag) cloned.colorTag = Object.assign(new ColorTag(null), obj.colorTag) as ColorTag;
    if (obj.jobSummary) cloned._jobSummary = Object.assign(new JobSummary(), obj.jobSummary) as JobSummary;
    if (obj.jobPosting) cloned._jobPosting = Object.assign(new JobPosting(), obj.jobPosting) as JobPosting;
    if (obj.jobApplication) cloned._jobApplication = Object.assign(new JobApplication(), obj.jobApplication) as JobApplication;
    if (obj.jobFollowup) cloned._jobFollowup = Object.assign(new JobFollowup(), obj.jobFollowup) as JobFollowup;
    if (obj.jobMemo) cloned._jobMemo = Object.assign(new JobMemo(), obj.jobMemo) as JobMemo;    
    return cloned;
  }

  copy(): JobRecord {
    let obj = this.clone();
    // obj.id = RandomIdUtil.id();
    obj.id = UniqueIdUtil.id();
    obj.resetCreatedTime();
    // Regenerate color tag? Is it necessary?
    // obj.colorTag = ColorTagUtil.randomColorTag();
    obj.colorTagLabel = ColorTagUtil.randomColorTag().toString();
    // obj.colorTagLabel = ColorTag.BW_SILVER_SQUARE.toString();
    return obj;
  }
}

import { UniqueIdUtil } from '@ngcore/core';
import { BaseModel } from '@ngcore/base';


export class JobMemo extends BaseModel {

  // Title?
  public title: (string | null) = null;
  // get title(): string {
  //   return this._title;
  // }
  setTitle(_title: string) {
    this.title = _title;
    this.isDirty = true;
  }


  // TBD:
  // Multiple memos?
  // Or, a memo == [ notes ] ???
  // ...


  // Plain text vs Markdown vs HTML ???
  // --> Just use commonmark...
  // public mediaType: string = null;
  // // getMediaType(): string { return this.mediaType; }
  // setMediaType(_mediaType: string) { this.mediaType = _mediaType; this.isDirty = true; }


  // TBD: Just store markdownText only???

  // Not being used...

  // Raw input text, in markdown.
  public rawText: (string | null) = null;
  // // Sanitized, to avoid bad input...
  // public markdownText: string;
  // Text without markups.
  public plainText: (string | null) = null;
  // Output in HTML
  public htmlText: (string | null) = null;


  // Currently, only markdownText is used.
  public markdownText: (string | null) = null;
  // get markdownText(): string {
  //   return this._markdownText;
  // }
  setMarkdownText(_markdownText: string) {
    this.markdownText = _markdownText;
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
  // public memoDate: string;

  // // Object type and the target field/attr key-value pair (e.g., id, targetDate,...).
  // // (These should be considered immutable.)
  // public hostObjectType: string;
  // public hostObjectMember: [string, any];

  constructor() {
    super();
  }


  toString(): string {
    return super.toString()
      + '; title = ' + this.title
      + '; markdownText = ' + this.markdownText
      + '; isHidden = ' + this.isHidden;
  }


  clone(): JobMemo {
    let cloned = Object.assign(new JobMemo(), this) as JobMemo;
    return cloned;
  }
  static clone(obj: any): JobMemo {
    let cloned = Object.assign(new JobMemo(), obj) as JobMemo;
    return cloned;
  }

  copy(): JobMemo {
    let obj = this.clone();
    // obj.id = RandomIdUtil.id();
    obj.id = UniqueIdUtil.id();
    obj.resetCreatedTime();
    return obj;
  }
}

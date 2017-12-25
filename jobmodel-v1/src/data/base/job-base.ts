import { UniqueIdUtil, DateIdUtil, DateTimeUtil, RandomIdUtil } from '@ngcore/core';
import { ExtendedModel } from '@ngcore/base';


// Base for Job-related models.
export abstract class JobBase extends ExtendedModel // extends BaseModel 
{
  // getTitle(): string { return this.title; }
  setTitle(_title: string) { this.title = _title; this.isDirty = true; }

  // getDescription(): string { return this.description; }
  setDescription(_description: string) { this.description = _description; this.isDirty = true; }

  // range [-5,-5] ?
  // private _importance: number = 0
  // getImportance(): number { return this.importance; }
  setImportance(_importance: number) {
    this.importance = _importance;
    if (this.importance > 5) {   // how to enforce this when this.importance = x is used????
      this.importance = 5;
    }
    if (this.importance < -5) {
      this.importance = -5;
    }
    this.isDirty = true;
  }

  // private _urgency: number = 0;
  // getUrgency(): number { return this.urgency; }
  setUrgency(_urgency: number) {
    this.urgency = _urgency;
    if (this.urgency > 5) {   // how to enforce this when this.urgency = x is used????
      this.urgency = 5;
    }
    if (this.urgency < -5) {
      this.urgency = -5;
    }
    this.isDirty = true;
  }

  // ?? difficulty, job expected duration, ...
  // private _difficulty: number = 0;  
  // getDifficulty(): number { return this.difficulty; }
  setDifficulty(_difficulty: number) {
    this.difficulty = _difficulty;
    this.isDirty = true;
  }

  constructor(
    // public id: string = null, public userId: string = null, 
    public title: (string | null) = null,
    public description: (string | null) = null,
    public importance: number = 0,
    public urgency: number = 0,
    public difficulty: number = 0
  ) {
    // super(id, userId);
    super();
  }

  // priority is dynamically generated based on importance and urgency. And, difficulty, etc.
  // private _priority: number = 0;
  get priority(): number {
    // return this._priority;
    // return this.importance + this.urgency;
    // Currently, the range is [-5, 5], assuming i/u ranges are [-5, 5].
    return Math.round((1.0499 * (this.importance + this.urgency)) * 0.5);
  }

  get isDeleted(): boolean {
    return (this.deletedTime > 0);
  }


  toString(): string {
    let str = super.toString()
      + '; title = ' + this.title
      + '; description = ' + this.description
      + '; importance = ' + this.importance
      + '; urgency = ' + this.urgency
      + '; difficulty = ' + this.difficulty;
    return str;
  }

  // clone(): JobBase {
  //   let cloned = Object.assign(new JobBase(), this) as JobBase;
  //   return cloned;
  // }
  // static clone(obj: any): JobBase {
  //   let cloned = Object.assign(new JobBase(), obj) as JobBase;
  //   return cloned;
  // }

  // copy(): JobBase {
  //   let obj = this.clone();
  //   // obj.id = RandomIdUtil.id();
  //   obj.id = UniqueIdUtil.id();
  //   obj.resetCreatedTime();
  //   return obj;
  // }
}

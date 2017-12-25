import { NgModule, ModuleWithProviders, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgCoreCoreModule } from '@ngcore/core';
import { NgCoreBaseModule } from '@ngcore/base';
import { NgCoreAuthModule } from '@ngcore/auth';
import { NgCoreMarkModule } from '@ngcore/mark';


// import { CommonMarkService } from './src/services/common-mark-service';
// import { CommonTextEntryComponent } from './src/components/common-text-entry/common-text-entry';

export * from './src/common/events/jobchase-model-events';
export * from './src/data/core/posting-status';
export * from './src/data/core/application-status';
export * from './src/data/core/job-type';
export * from './src/data/core/contact-type';
export * from './src/data/core/contact-info';
export * from './src/data/base/job-base';
export * from './src/data/model/job-summary';
export * from './src/data/model/job-posting';
export * from './src/data/model/job-application';
export * from './src/data/model/job-followup';
export * from './src/data/model/job-memo';
export * from './src/data/model/job-record';
export * from './src/data/model/user-preference';
export * from './src/data/model/user-profile';

// export * from './src/services/common-mark-service';
// export * from './src/components/common-text-entry/common-text-entry';


@NgModule({
  imports: [
    CommonModule,
    // BrowserModule,
    // IonicModule,

    NgCoreCoreModule,
    NgCoreBaseModule,
    NgCoreAuthModule,
    NgCoreMarkModule
  ],
  declarations: [
    // CommonTextEntryComponent,
  ],
  exports: [
    // CommonTextEntryComponent,
  ],
  entryComponents: [
    // CommonTextEntryComponent,
  ]
})
export class JobModelModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: JobModelModule,
      providers: [
        // CommonMarkService
      ]
    };
  }
}

// tbd. 
// "job application status"
export enum ApplicationStatus {
  unknown = 0,
  applied = 4,
  acknowledged = 8,
  screened = 16,
  interviewed = 32,
  offered = 64,
  rejected = 128,
  // ...
  deleted = 1024
}

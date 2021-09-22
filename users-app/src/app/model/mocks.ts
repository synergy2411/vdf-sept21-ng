import { IUser } from "./user";

export const USER_DATA : IUser[] = [{
  firstName : "bill",
  lastName : "gates",
  dob : new Date("Dec 21, 1965"),
  income : 50000,
  company : "Microsoft",
  image : "./assets/images/bill.jpg",
  votes : 120
},{
  firstName : "steve",
  lastName : "jobs",
  dob : new Date("Jan 2, 1965"),
  income : 0,
  company : "Apple",
  image : "./assets/images/steve.jpg",
  votes : 100
},{
  firstName : "tim b.",
  lastName : "lee",
  dob : new Date("Aug 1, 1965"),
  income : 40000,
  company : "World Wide Web",
  image : "./assets/images/tim.jpg",
  votes : 190
}]

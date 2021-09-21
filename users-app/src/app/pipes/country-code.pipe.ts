import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name : "countryCode"
})
export class CountryCodePipe implements PipeTransform {
  transform(value : number, code : string) : string{
    switch (code) {
      case 'USA':{
        return "+1 " + value
      }
      case 'EUR':{
        return "+11 " + value
      }
      case 'AUS':{
        return "+18 " + value
      }
      default:
        return "+91 " + value
    }
  }
}

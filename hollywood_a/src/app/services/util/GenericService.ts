import { Injectable } from '@angular/core';
import moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  constructor() { }

  static date_mysql(date: any): any {
    return moment(date).utcOffset("+05:30").format("YYYY-MM-DD").toString();
  }

  static today_date(): any {
    return moment().utcOffset("+05:30").format("DD-MM-YYYY").toString();
    //  return moment(datetime, ["YYYY-MM-DD HH:mm:ss","DD-MMM-YYYY h:ma"]).format("DD-MMM-YYYY h:m a").toString();
  }
  static time_day_unix(d: any): any {
    return (moment(d).utcOffset(0).unix() + (330 * 60));
  }
  static today_date_time_mysql(): any {
    return moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss").toString();
  }
  static time_today_timestamp(): any {
    return (moment().unix() + (330 * 60));
  }
  static timestamp_to_date_mysql(t: any): any {
    //return moment.unix(t).utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");

    return moment(t).utcOffset(0).utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
  }

  static date_formate_specified(date: any, param: any): any {
    return moment(date).utcOffset("+05:30").format(param).toString();
  }

  static day_today_param(param: any): any {
    return moment().utcOffset("+05:30").format(param).toString();
  }
  static date_time_mysql(date: any): any {
    return moment(date).utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss").toString();
  }


  static time_formate(time: any): any {
    return moment(time, ["HH:mm:ss", "hh:mm a"]).utcOffset("+05:30").format("hh:mm a").toString();
  }

  static today_date_mysql(): any {
    return moment().utcOffset("+05:30").format("YYYY-MM-DD").toString();
    //  return moment(datetime, ["YYYY-MM-DD HH:mm:ss","DD-MMM-YYYY h:ma"]).format("DD-MMM-YYYY h:m a").toString();
  }

  static date_formate(date: any): any {
    return moment(date, ["YYYY-MM-DD", "DD-MMM-YYYY"]).utcOffset("+05:30").format("DD-MMM-YYYY").toString();
  }
  static time_formate_fromDate(time: any): any {
    return moment(time, ["YYYY-MM-DD HH:mm:ss", "hh:mm a"]).utcOffset("+05:30").format("hh:mm a").toString();
  }
  static date_time_formate(datetime: any): any {
    return moment(datetime, ["YYYY-MM-DD HH:mm:ss", "DD-MMM-YYYY hh:mm a"]).utcOffset("+05:30").format("DD-MMM-YYYY hh:mm a").toString();  //13-Jun-2017 09:00 am
  }

  static DD_MM_YYYY_hh_mm_a(datetime: any): any {
    return moment(datetime, ["YYYY-MM-DD HH:mm:ss", "DD-MMM-YYYY hh:mm a"]).utcOffset("+05:30").format("DD-MM-YYYY hh:mm a").toString();  //13-02-2017 09:00 am
  }


  static isset(data: any): boolean {
    if (data != "") {
      if ((data != undefined) && (data != 'undefined') && (data != null) && (data != 'NaN')) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }



  static set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }


  static clear(key: string) {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error('Error removing  localStorage', e);
    }
  }


  static hypenToUndeScore(data: string) {
    let inputData = data.split("-") || [];
    return inputData.reduce((accumulator, currentValue) => {
      return (accumulator == "" ? "" : accumulator + "_") + currentValue;
    }, "");
  }

}

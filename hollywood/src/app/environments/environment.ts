// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false ,
  serviceApiUrl:"http://localhost:8081/hollywood/v1/",
  dateFormat:"DD-MMM-YYYY"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
/*
dateFormat

‘YYYY’ – define year ex. 2019
‘YY’ – define year ex. 19
‘Y’ – define year ex. 2019
‘MMMM’ – define month ex. April
‘MMM’ – define month ex. Apr
‘MM’ – define month ex. 04
‘dd’ – define day ex. 09
‘d’ – define day ex. 9
‘hh’ – define hour in AM/PM
‘h’ – define hour in AM/PM
‘mm’ – define minute
‘m’ – define minute
‘ss’ – define second
‘s’ – define second


“short” – equivalent to “M/d/yy h:mm a”
“medium” – equivalent to “MMM d, y h:mm:ss a”
“shortDate” – equivalent to “M/d/yy” (5/7/19)
“mediumDate” – equivalent to “MMM d, y” (May 7, 2019)
“longDate” – equivalent to “MMMM d, y” (May 7, 2019)
“fullDate” – equivalent to “EEEE, MMMM d, y” (Tuesday, May 7, 2019)
“shortTime” – equivalent to “h:mm a” (2:35 AM)
“mediumTime” – equivalent to “h:mm:ss a” (2:35:05 AM)
*/

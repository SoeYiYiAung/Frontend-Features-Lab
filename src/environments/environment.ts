// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// import packageInfo from '../../package.json';

export const environment = {
  // appVersion: packageInfo.version,
  production: false,
  apiUrl_: 'http://localhost:8080/AppPortal/module001/',
  apiUrl:'http://appuat.kbzms.com:8080/AppPortal/module001/',
  wsapiUrl: "http://10.10.171.97:9928/IIMS/ws/rest/",
  usercode : "STI1437",
  qkapiurl : "https://157.230.255.231:3300/v1/insurance/travel/order",
  apiurlSwagger : "http://172.16.10.70:2333/app/v1/MotorRefe/"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

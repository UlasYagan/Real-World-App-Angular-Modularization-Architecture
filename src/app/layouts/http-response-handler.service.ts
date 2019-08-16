import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpResponseHandlerService {

  constructor() { }
  // public onCatch(response: any, source: Observable<any>): Observable<any> {
  //   switch (response.status) {
  //     case 400:
  //       this.handleBadRequest(response);
  //       break;

  //     case 401:
  //       this.handleUnauthorized(response);
  //       break;

  //     case 403:
  //       this.handleForbidden();
  //       break;

  //     case 404:
  //       this.handleNotFound(response);
  //       break;

  //     case 500:
  //       this.handleServerError();
  //       break;

  //     default:
  //       break;
  //   }

  //   return throwError(response);
  // }

  // private handleBadRequest(responseBody: any): void {
  //   if (responseBody._body) {
  //     try {
  //       const bodyParsed = responseBody.json();
  //       this.handleErrorMessages(bodyParsed);
  //     } catch (error) {
  //       this.handleServerError();
  //     }
  //   } else {
  //     this.handleServerError();
  //   }
  // }


  // private handleUnauthorized(responseBody: any): void {
  //   // Read configuration in order to see if we need to display 401 notification message
  //   let unauthorizedEndpoints: Array<string> = this.configService.get('notifications')
  //     .unauthorizedEndpoints;

  //   unauthorizedEndpoints = unauthorizedEndpoints.filter(
  //     endpoint => this.getRelativeUrl(responseBody.url) === endpoint
  //   );
  //   this.router.navigate(['/login']);

  //   if (unauthorizedEndpoints.length) {
  //     this.notificationsService.info(
  //       'Info',
  //       this.translateService.instant('ServerError401'),
  //       this.configService.get('notifications').options
  //     );
  //   }
  // }

  // private handleForbidden(): void {
  //   this.notificationsService.error(
  //     'error',
  //     this.translateService.instant('ServerError403'),
  //     this.configService.get('notifications').options
  //   );
  //   this.router.navigate(['/login']);
  // }

  // private handleNotFound(responseBody: any): void {
  //   // Read configuration in order to see if we need to display 401 notification message
  //   let notFoundEndpoints: Array<string> = this.configService.get('notifications')
  //     .notFoundEndpoints;
  //   notFoundEndpoints = notFoundEndpoints.filter(
  //     endpoint => this.getRelativeUrl(responseBody.url) === endpoint
  //   );

  //   if (notFoundEndpoints.length) {
  //     const message = this.translateService.instant('ServerError404'),
  //       title = this.translateService.instant('ErrorNotificationTitle');

  //     this.showNotificationError(title, message);
  //   }
  // }

  // private handleServerError(): void {
  //   const message = this.translateService.instant('ServerError500'),
  //     title = this.translateService.instant('ErrorNotificationTitle');

  //   this.showNotificationError(title, message);
  // }

  // private handleErrorMessages(response: any): void {
  //   if (!response) {
  //     return;
  //   }

  //   for (const key of Object.keys(response)) {
  //     if (Array.isArray(response[key])) {
  //       response[key].forEach(value =>
  //         this.showNotificationError('Error', this.getTranslatedValue(value))
  //       );
  //     } else {
  //       this.showNotificationError('Error', this.getTranslatedValue(response[key]));
  //     }
  //   }
  // }

  // private getTranslatedValue(value: string): string {
  //   if (value.indexOf('[') > -1) {
  //     const key = value.substring(value.lastIndexOf('[') + 1, value.lastIndexOf(']'));
  //     value = this.translateService.instant(key);
  //   }

  //   return value;
  // }

  // private getRelativeUrl(url: string): string {
  //   return url.toLowerCase().replace(/^(?:\/\/|[^\/]+)*\//, '');
  // }

  // private showNotificationError(title: string, message: string): void {
  //   this.notificationsService.error(
  //     title,
  //     message,
  //     this.configService.get('notifications').options
  //   );
  // }
  
}

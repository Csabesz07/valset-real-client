import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  httpRequestNotificationInterceptor,
  provideHttpRequestNotificationHandler,
  provideUserRoles,
} from 'valset-core';

import { routes, TEMPLATE_ACCESS_ROLE } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([httpRequestNotificationInterceptor])),
    provideUserRoles(() => [TEMPLATE_ACCESS_ROLE]),
    provideHttpRequestNotificationHandler(() => undefined),
  ],
};

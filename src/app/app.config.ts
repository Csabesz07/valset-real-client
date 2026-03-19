import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import {
  httpRequestNotificationInterceptor,
  provideHttpRequestNotificationHandler,
  provideUserRoles,
} from 'valset-core';

import { routes, TEMPLATE_ACCESS_ROLE } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      }),
    ),
    provideHttpClient(withInterceptors([httpRequestNotificationInterceptor])),
    provideUserRoles(() => [TEMPLATE_ACCESS_ROLE]),
    provideHttpRequestNotificationHandler(() => undefined),
  ],
};

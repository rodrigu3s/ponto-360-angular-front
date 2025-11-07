import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { providePrimeNG } from 'primeng/config';

import MyPreset from '../styles/theme/my-preset';
import { routes } from './app.routes';
import { MessageService } from 'primeng/api';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    MessageService,
    provideAnimationsAsync(),
    provideEnvironmentNgxMask(),
    providePrimeNG({
        theme: {
          preset: MyPreset,
          options: {
            darkModeSelector: false
          }
        }
    })
  ]
};

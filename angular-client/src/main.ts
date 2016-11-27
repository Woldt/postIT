/*
This is the file, that makes our application run in the browser!
it gets the "browser" module, then bootstrap the AppModule, which
builds together the heart of our application (app.component)
and serves it back to the "main.ts", which then returns the application to the
index.html which in turn displays the application in the browser.
*/
import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

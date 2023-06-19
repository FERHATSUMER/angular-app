import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// Path: angular\src\app\app.module.ts// Path: angular\src\app\app.module.ts

//  import { BrowserModule } from '@angular/platform-browser';

import 'zone.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  platformBrowserDynamic().bootstrapModule(AppModule);
})
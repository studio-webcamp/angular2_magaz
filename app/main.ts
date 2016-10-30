/**
 * Created by lenka on 10/29/16.
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import Magaz from "./models/Magaz";
let magaz = new Magaz();
magaz.getAllItems();
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);

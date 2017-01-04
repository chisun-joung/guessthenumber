/**
 * Created by csjoung on 2017. 1. 4..
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppModule} from "./app.module";

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
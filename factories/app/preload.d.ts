import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
export declare class PreloadSelectedModulesList implements PreloadingStrategy {
    preload(route: Route, load: Function): Observable<any>;
}

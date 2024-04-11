import {Routes} from '@angular/router';
import {EasyComponent} from "./pages/questions/easy/easy.component";
import {AppComponent} from "./app.component";
import {MediumComponent} from "./pages/questions/medium/medium.component";
import {HardComponent} from "./pages/questions/hard/hard.component";

export const routes: Routes = [
    { path: 'home', component: AppComponent },
    { path: 'questions/easy', component: EasyComponent },
    { path: 'questions/medium', component: MediumComponent },
    { path: 'questions/hard', component: HardComponent },
    { path: '**', redirectTo: '/home' },
];

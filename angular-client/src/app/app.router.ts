/*
This is a module, that handles all the navigation
between sub-pages / views of the application.
*/
import { RouterModule, Routes } from '@angular/router';

import { Github } from './github/github.component';
import { Postit } from './postIT/postit.component';
import { Tutorial } from './tutorial/tutorial.component';


const appRoutes: Routes = [
    // Check to see if navigation / [routerLink]="['...']" matches any of these
    { path: '', component: Postit },
    { path: 'github', component: Github },
    { path: 'tutorial', component: Tutorial },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(appRoutes);

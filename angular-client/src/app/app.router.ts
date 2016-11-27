import { RouterModule, Routes } from '@angular/router';

import { Github } from './github/github.component';
import { Postit } from './postIT/postit.component';
import { Tutorial } from './tutorial/tutorial.component';


const appRoutes: Routes = [
    { path: '', component: Postit },
    { path: 'github', component: Github },
    { path: 'tutorial', component: Tutorial },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(appRoutes);

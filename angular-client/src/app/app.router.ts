import { RouterModule, Routes } from '@angular/router';

import { Github } from './github/github.component';
import { Postit } from './postIT/postit.component';


const appRoutes: Routes = [
    { path: '', component: Postit },
    { path: 'github', component: Github },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(appRoutes);

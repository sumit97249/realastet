import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  AuthGuard
} from './demo/guards/auth.guard';
import {
  DashboardGuard
} from './demo/guards/dashboard.guard';

import {
  SinginComponent
} from './demo/pages/authentication/singin/singin.component';
import { TaskComponent } from './demo/pages/task/task.component';
import { CustomerComponent } from './demo/pages/customer/customer.component';
import {
  AdminComponent
} from './theme/layout/admin/admin.component';
import {
  AuthComponent
} from './theme/layout/auth/auth.component';
import { LandingComponent } from '../app/demo/pages/landing/landing.component';

const routes: Routes = [{
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [{
        path: '',
        redirectTo: 'sample-page',
        pathMatch: 'full'
      },
      {
        path: 'customers',
        component: CustomerComponent,
      },
       {
        path: 'task',
        component: TaskComponent,
      },
      {
        path: 'sample-page',
        loadChildren: () => import('./demo/pages/sample-page/sample-page.module').then(module => module.SamplePageModule)
      },
    
    ]
    
    
  },
  {
    path: 'lending',
    component:LandingComponent
  },

  {

    path: 'singin',
    component: AuthComponent,
    canActivate: [DashboardGuard],
    children: [{
        path: '',
        component: SinginComponent,
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    relativeLinkResolution: 'legacy'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

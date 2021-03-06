import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dailyUpdate',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      // {
      //   path: 'dashboard',
      //   loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      // },
      // {
      //   path: 'components',
      //   loadChildren: './views/components/components.module#ComponentsModule'

      // },
      // {
      //   path: 'icons',
      //   loadChildren: './views/icons/icons.module#IconsModule'
      // },
      // {
      //   path: 'widgets',
      //   loadChildren: './views/widgets/widgets.module#WidgetsModule',
      // },
      
      // {
      //   path: 'charts',
      //   loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
      // },
      {
        path: 'dailyUpdate',
        loadChildren: './views/dailyUpdates/dailyUp.module#DailyUpModule'
      },
      {
        path: 'astroavailabilityreport',
        loadChildren: './views/astrologeravailabilityreport/astroavailabilityreport.module#AstroavailabilityreportModule'
      },
	  {
        path: 'consolidatedreport',
        loadChildren: './views/consolidatedreport/consolidatedreport.module#ConsolidatedreportModule',
        
      },
	  {
        path: 'astroforcereport',
        loadChildren: './views/astroforcereport/astroforcereport.module#AstroforcereportModule',
        
      },
      {
        path: 'notificationreport',
        loadChildren: './views/astronotificationreport/astronotificationreport.module#AstronotificationreportModule',
      },
      {
        path: 'averagecallreport',
        loadChildren: './views/averagecallreport/averagecallreport.module#AveragecallreportModule',
      }
      // {
      //   path: 'categories',
      //   loadChildren: './views/categories/categories.module#CategoriesModule'
      // },
      // {
      //   path: 'packages',
      //   loadChildren: './views/packages/packages.module#PackagesModule'
      // },
      // {
      //   path: 'banners',
      //   loadChildren: './views/banners/banners.module#BannersModule'
      // },
      // {
      //   path: 'astroconsolidatedreport',
      //   loadChildren: './views/astroconsolidatedreport/astroconsolidatedreport.module#AstroconsolidatedreportModule',
        
      // }
    ]
  },
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './views/pages/pages.module#PagesModule',
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

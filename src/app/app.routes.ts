import { Routes } from '@angular/router';
import { EcommerceComponent } from './pages/dashboard/ecommerce/ecommerce.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FormElementsComponent } from './pages/forms/form-elements/form-elements.component';
import { BasicTablesComponent } from './pages/tables/basic-tables/basic-tables.component';
import { BlankComponent } from './pages/blank/blank.component';
import { NotFoundComponent } from './pages/other-page/not-found/not-found.component';
import { AppLayoutComponent } from './shared/layout/app-layout/app-layout.component';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { LineChartComponent } from './pages/charts/line-chart/line-chart.component';
import { BarChartComponent } from './pages/charts/bar-chart/bar-chart.component';
import { AlertsComponent } from './pages/ui-elements/alerts/alerts.component';
import { AvatarElementComponent } from './pages/ui-elements/avatar-element/avatar-element.component';
import { BadgesComponent } from './pages/ui-elements/badges/badges.component';
import { ButtonsComponent } from './pages/ui-elements/buttons/buttons.component';
import { ImagesComponent } from './pages/ui-elements/images/images.component';
import { VideosComponent } from './pages/ui-elements/videos/videos.component';
import { SignInComponent } from './pages/auth-pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/auth-pages/sign-up/sign-up.component';
import { CalenderComponent } from './pages/calender/calender.component';

export const routes: Routes = [
  {
    path:'',
    component:AppLayoutComponent,
    children:[
      {
        path: '',
        component: EcommerceComponent,
        pathMatch: 'full',
        title:'WatchFlix'
      },
      {
        path:'calendar',
        component:CalenderComponent,
        title:'WatchFlix'
      },
      {
        path:'profile',
        component:ProfileComponent,
        title:'WatchFlix'
      },
      {
        path:'form-elements',
        component:FormElementsComponent,
        title:'WatchFlix'
      },
      {
        path:'basic-tables',
        component:BasicTablesComponent,
        title:'WatchFlix'
      },
      {
        path:'blank',
        component:BlankComponent,
        title:'WatchFlix'
      },
      // support tickets
      {
        path:'invoice',
        component:InvoicesComponent,
        title:'WatchFlix'
      },
      {
        path:'line-chart',
        component:LineChartComponent,
        title:'WatchFlix'
      },
      {
        path:'bar-chart',
        component:BarChartComponent,
        title:'WatchFlix'
      },
      {
        path:'alerts',
        component:AlertsComponent,
        title:'WatchFlix'
      },
      {
        path:'avatars',
        component:AvatarElementComponent,
        title:'WatchFlix'
      },
      {
        path:'badge',
        component:BadgesComponent,
        title:'WatchFlix'
      },
      {
        path:'buttons',
        component:ButtonsComponent,
        title:'WatchFlix'
      },
      {
        path:'images',
        component:ImagesComponent,
        title:'WatchFlix'
      },
      {
        path:'videos',
        component:VideosComponent,
        title:'WatchFlix'
      },
    ]
  },
  // auth pages
  {
    path:'signin',
    component:SignInComponent,
    title:'WatchFlix'
  },
  {
    path:'signup',
    component:SignUpComponent,
    title:'WatchFlix'
  },
  // error pages
  {
    path:'**',
    component:NotFoundComponent,
    title:'WatchFlix'
  },
];

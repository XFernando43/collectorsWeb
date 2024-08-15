import { Routes } from '@angular/router';
import { LoginPageComponent } from './collectors/pages/login-page/login-page.component';
import { CollectionFormComponent } from './collectors/pages/collection-form/collection-form.component';
import { CollectorsDashboardComponent } from './collectors/pages/collectors-dashboard/collectors-dashboard.component';

export const routes: Routes = [
    {
        path:'Login',
        component:LoginPageComponent,
    },
    {
        path:'Dashboard',
        component:CollectorsDashboardComponent,
    },
    {
        path:'Formulario',
        component:CollectionFormComponent,
    }
];

import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { CalcComponent } from './calc/calc.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';


export const AppRoutes: Routes = [
    {
        path: '', 
        component: HomeComponent
     },
    { 
        path: 'calc',
        component: CalcComponent
     },
     { 
        path: '**',
        component: NotfoundComponent
     },
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);

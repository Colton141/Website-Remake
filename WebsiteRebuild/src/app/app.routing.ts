import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { ItemListComponent } from './item-list/item-list.component';
import { AboutComponent }   from './about/about.component'; 


const appRoutes: Routes = [


{
  path: '',
  component: ItemListComponent
},

{
path: 'about',
component: AboutComponent
}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

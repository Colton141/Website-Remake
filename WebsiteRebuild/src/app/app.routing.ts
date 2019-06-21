import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { ItemListComponent } from './item-list/item-list.component';


const appRoutes: Routes = [


{
  path: '',
  component: ItemListComponent
},

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

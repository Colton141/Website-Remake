import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { ItemListComponent } from './item-list/item-list.component';
import { AboutComponent }   from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';


const appRoutes: Routes = [


{
  path: '',
  component: WelcomeComponent
},

{
path: 'about',
component: AboutComponent
},

{
  path: 'itemlist',
  component: ItemListComponent
}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

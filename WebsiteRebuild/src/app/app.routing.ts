import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { ItemListComponent } from './item-list/item-list.component';
import { AboutComponent }   from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EditListComponnent } form './edit-list/edit-list.component';


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
  path: 'itemList',
  component: ItemListComponent
},

{
  path: 'itemEdit',
  component: EditListComponent
}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

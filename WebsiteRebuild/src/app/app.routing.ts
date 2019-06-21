import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { ItemListComponent } from './item-list/item-list.component';
import { AboutComponent }   from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';


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
  component: EditItemComponent
},

{
  path: 'item/:id',
  componenet: ItemDetailComponent
}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

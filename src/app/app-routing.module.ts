import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlobalConfigAllComponent } from './1-use-global-config/map.component';
import { GlobalOverWriteComponent } from './2-global-and-overwrite/map.component';

const routes: Routes = [
  { path: '', component: GlobalConfigAllComponent },
  { path: 'global-overwrite', component: GlobalOverWriteComponent },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

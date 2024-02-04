import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './todos/components/main/main.component';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./todos/components/main/main.component').then(
        (m) => m.MainComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

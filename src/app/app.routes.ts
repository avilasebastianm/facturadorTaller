import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'presupuesto', loadChildren: () => import('./features/presupuesto/presupuesto.module').then(m => m.PresupuestoModule) },
  { path: 'factura', loadChildren: () => import('./features/factura/factura.module').then(m => m.FacturaModule) },
  { path: 'cliente', loadChildren: () => import('./features/cliente/cliente.module').then(m => m.ClienteModule) },
  { path: '', redirectTo: '/presupuesto', pathMatch: 'full' },
  { path: '**', redirectTo: '/presupuesto' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { LoginGuard } from './shared/guards/login.guard';
import { AuthGuard } from './shared/guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule), canActivate: [LoginGuard] },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuard] },
  { path: 'categoria', loadChildren: () => import('./categoria/categoria.module').then(m => m.CategoriaModule), canActivate: [AuthGuard] },
  { path: 'produto', loadChildren: () => import('./produto/produto.module').then(m => m.ProdutoModule), canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

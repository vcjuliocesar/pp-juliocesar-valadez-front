//Importat modulos del router
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Imporat componente
import { UserListComponent } from './components/user-list/user-list.component';
import { AppComponent } from './app.component';
//array de rutas
const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: '**', component: AppComponent },
];

//Exportar configuracion
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

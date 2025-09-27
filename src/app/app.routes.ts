import { Routes } from '@angular/router';
import { ImovelPage } from './features/imoveis/components/imovel/imovel';
import { HomePage } from './features/home/components/home-page/home-page';
import { Aluguel } from './features/alugueis/components/aluguel/aluguel';

export const routes: Routes = [
  { path: "imovel", component: ImovelPage },
  { path: "inicio", component: Aluguel },
  { path: "home", component: HomePage },
  { path: "", redirectTo: "home", pathMatch: 'full' },
];


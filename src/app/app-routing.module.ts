import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'contato-salvar', loadChildren: './contato/contato-salvar/contato-salvar.module#ContatoSalvarPageModule' },
  { path: 'contato-lista', loadChildren: './contato/contato-lista/contato-lista.module#ContatoListaPageModule' },
  { path: 'contato-login', loadChildren: './contato/contato-login/contato-login.module#ContatoLoginPageModule' },
  { path: 'inicio', loadChildren: './contato/inicio/inicio.module#InicioPageModule' },
  { path: 'professor-salvar', loadChildren: './professor/professor-salvar/professor-salvar.module#ProfessorSalvarPageModule' },
  { path: 'professor-lista', loadChildren: './professor/professor-lista/professor-lista.module#ProfessorListaPageModule' },
  { path: 'pre-historia', loadChildren: './contato/pre-historia/pre-historia.module#PreHistoriaPageModule' },
  { path: 'antiguidade', loadChildren: './contato/antiguidade/antiguidade.module#AntiguidadePageModule' },
  { path: 'idade-media', loadChildren: './contato/idade-media/idade-media.module#IdadeMediaPageModule' },
  { path: 'idade-contemporanea', loadChildren: './contato/idade-contemporanea/idade-contemporanea.module#IdadeContemporaneaPageModule' },
  { path: 'idade-moderna', loadChildren: './contato/idade-moderna/idade-moderna.module#IdadeModernaPageModule' },
  { path: 'pagina', loadChildren: './pagina/pagina.module#PaginaPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

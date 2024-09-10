import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full'
  },
  {
    path: 'resume',
    loadChildren: () => import('./pages/resume/resume.module').then( m => m.ResumePageModule)
  },
  {
    path: 'code',
    loadChildren: () => import('./pages/code/code.module').then( m => m.CodePageModule)
  },
  {
    path: 'story/lines/:id/:channel/:time',
    loadChildren: () => import('./pages/tellie/story/lines/lines.module').then( m => m.LinesPageModule)
  },
  {
    path: 'start',
    loadChildren: () => import('./pages/start/start.module').then( m => m.StartPageModule)
  },
  {
    path: 'speedtest',
    loadChildren: () => import('./pages/speedtest/speedtest.module').then( m => m.SpeedtestPageModule)
  },
  {
    path: 'goodbaad',
    loadChildren: () => import('./pages/goodbaad/goodbaad.module').then( m => m.GoodbaadPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { Routes } from '@angular/router';
import { requiredRoleGuard, type RequiredRoleGuardData } from 'valset-core';

export const TEMPLATE_ACCESS_ROLE = 'template:access';

const templateAccessData = {
  requiredRole: TEMPLATE_ACCESS_ROLE,
} satisfies RequiredRoleGuardData;

export const routes: Routes = [
  {
    path: '',
    canActivate: [requiredRoleGuard],
    data: templateAccessData,
    loadComponent: () =>
      import('./pages/template-home/template-home.page').then(
        (module) => module.TemplateHomePage,
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

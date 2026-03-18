import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import {
  type HeaderMenuItem,
  TemplateHeaderComponent,
} from '../../components/template-header/template-header.component';

interface TemplateFeature {
  readonly title: string;
  readonly description: string;
}

@Component({
  selector: 'app-template-home-page',
  imports: [TemplateHeaderComponent],
  templateUrl: './template-home.page.html',
  styleUrl: './template-home.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateHomePage {
  protected readonly title = 'Valset Template';
  protected readonly menuItems = signal<readonly HeaderMenuItem[]>([
    // Add project-specific header items here.
    // { label: 'Dashboard', route: '/dashboard' },
  ]);

  protected readonly features: readonly TemplateFeature[] = [
    {
      title: 'Guarded entry route',
      description:
        'The default route uses valset-core requiredRoleGuard so real projects can connect it to their role source immediately.',
    },
    {
      title: 'HTTP interception ready',
      description:
        'The app bootstrap already includes the valset-core interceptor and a notification handler placeholder.',
    },
    {
      title: 'Clean starter surface',
      description:
        'This page gives downstream projects a neutral shell instead of Angular demo content, while leaving room for feature-specific navigation.',
    },
  ];
}

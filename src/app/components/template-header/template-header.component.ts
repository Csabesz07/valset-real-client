import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface HeaderMenuItem {
  label: string;
  route: string;
  fragment?: string;
}

export const HEADER_MENU_ITEMS: readonly HeaderMenuItem[] = [
  {
    label: 'Funds',
    route: '/',
    fragment: 'funds',
  },
  {
    label: 'Managers',
    route: '/',
    fragment: 'managers',
  },
  {
    label: 'Outlook',
    route: '/',
    fragment: 'outlook',
  },
];

@Component({
  selector: 'app-template-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './template-header.component.html',
  styleUrl: './template-header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateHeaderComponent {
  readonly title = input('Northstar Capital');
  readonly menuItems = input<readonly HeaderMenuItem[]>(HEADER_MENU_ITEMS);

  protected readonly hasMenuItems = computed(() => this.menuItems().length > 0);
}

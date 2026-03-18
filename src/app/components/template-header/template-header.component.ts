import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface HeaderMenuItem {
  label: string;
  route: string;
}

@Component({
  selector: 'app-template-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './template-header.component.html',
  styleUrl: './template-header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateHeaderComponent {
  readonly title = input('Valset Template');
  readonly menuItems = input<readonly HeaderMenuItem[]>([]);

  protected readonly hasMenuItems = computed(() => this.menuItems().length > 0);
}

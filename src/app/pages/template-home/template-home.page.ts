import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CatProfileImageComponent } from 'valset-core';

import { TemplateHeaderComponent } from '../../components/template-header/template-header.component';

interface InvestmentMetric {
  readonly value: string;
  readonly label: string;
  readonly detail: string;
}

interface FundStrategy {
  readonly name: string;
  readonly focus: string;
  readonly allocation: string;
  readonly riskProfile: string;
}

interface FundManager {
  readonly name: string;
  readonly title: string;
  readonly specialty: string;
  readonly philosophy: string;
}

interface OutlookPoint {
  readonly title: string;
  readonly description: string;
}

@Component({
  selector: 'app-template-home-page',
  imports: [TemplateHeaderComponent, CatProfileImageComponent],
  templateUrl: './template-home.page.html',
  styleUrl: './template-home.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateHomePage {
  protected readonly title = 'Northstar Capital';
  protected readonly metrics: readonly InvestmentMetric[] = [
    {
      value: 'EUR 4.2B',
      label: 'Assets under stewardship',
      detail: 'Balanced across public equities, private credit, and infrastructure mandates.',
    },
    {
      value: '17',
      label: 'Institutional strategies',
      detail: 'Built for pension boards, family offices, and founder liquidity programs.',
    },
    {
      value: '94%',
      label: 'Client retention',
      detail: 'Driven by transparent portfolio reviews and disciplined downside protection.',
    },
  ];

  protected readonly funds: readonly FundStrategy[] = [
    {
      name: 'Horizon Equity Fund',
      focus: 'Concentrated global equities with pricing power and recurring revenue.',
      allocation: 'Targeting 12 to 18 holdings with a five-year investment horizon.',
      riskProfile: 'Core growth allocation',
    },
    {
      name: 'Harbor Income Fund',
      focus: 'Senior secured private credit and short-duration income opportunities.',
      allocation: 'Monthly liquidity sleeve paired with covenant-heavy lending.',
      riskProfile: 'Capital preservation',
    },
    {
      name: 'Atlas Transition Fund',
      focus: 'Energy transition infrastructure and climate-adjacent industrials.',
      allocation: 'Blended listed and private exposure with inflation-sensitive cash flows.',
      riskProfile: 'Real asset diversification',
    },
  ];

  protected readonly managers: readonly FundManager[] = [
    {
      name: 'Lena Varga',
      title: 'Chief Investment Officer',
      specialty: 'Multi-asset allocation',
      philosophy:
        'Pairs valuation discipline with tactical rebalancing so clients stay invested through regime shifts.',
    },
    {
      name: 'Milan Szabo',
      title: 'Head of Credit',
      specialty: 'Private lending',
      philosophy:
        'Underwrites for resilience first, using lender protections and downside scenarios as the core edge.',
    },
    {
      name: 'Nora Fekete',
      title: 'Portfolio Manager',
      specialty: 'Public equities',
      philosophy:
        'Looks for durable compounders where management incentives, balance sheets, and free cash flow line up.',
    },
  ];

  protected readonly outlook: readonly OutlookPoint[] = [
    {
      title: 'Quality remains scarce',
      description:
        'The team is leaning into businesses with pricing power and clean balance sheets while rate-sensitive sectors reset.',
    },
    {
      title: 'Income is investable again',
      description:
        'Private credit and short-duration yield are being used as deliberate allocation tools rather than idle cash substitutes.',
    },
    {
      title: 'Real assets deserve a seat',
      description:
        'Infrastructure and transition assets help stabilize long-horizon portfolios when equity volatility re-prices growth.',
    },
  ];
}

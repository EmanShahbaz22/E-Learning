import { Component, OnInit, OnDestroy,ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AnimationService } from './services/animation.service';

// Import all components
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { TenantSectionComponent } from './components/tenant-section/tenant-section.component';
import { AiDemoComponent } from './components/ai-demo/ai-demo.component';
import { FeaturesComponent } from './components/features/features.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { CtaComponent } from './components/cta/cta.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    TenantSectionComponent,
    AiDemoComponent,
    FeaturesComponent,
    HowItWorksComponent,
    CtaComponent,
    FooterComponent
  ],
  // template: `
  //   <app-header></app-header>
  //   <app-hero></app-hero>
  //   <app-tenant-section></app-tenant-section>
  //   <app-ai-demo></app-ai-demo>
  //   <app-features></app-features>
  //   <app-how-it-works></app-how-it-works>
  //   <app-cta></app-cta>
  //   <app-footer></app-footer>
  //   <router-outlet />
  // `,
  templateUrl: './landing-page.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit, OnDestroy {
  title = 'eduverse-ai-platform';

  constructor(private animationService: AnimationService) {}

  ngOnInit() {
    // it will Initialize scroll animations after view init that means when webiste is first time loading only then animation will be applied
    setTimeout(() => {
      this.animationService.initScrollAnimations();
    }, 100);
  }

  ngOnDestroy() {
    this.animationService.destroy();
  }
}
import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  headerOpacity = 0.85;


  mobileMenuOpen = false;

   constructor(private router: Router) {}
   // this function Listens for page scroll events .
    //As we scrolls down, the header background gets  darker.
    //but it is optional for better ui of website
   
   
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrolled = window.pageYOffset;
    
    this.headerOpacity = Math.min(0.95, 0.85 + (scrolled / 1000));
  }

  
   
   //this will be Used when clicking the hamburger button on small screens.
   
  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  
   // Smoothly scrolls the page to a specific section by its ID like there would be an id for every section in page.
   // like scrollToSection('features') will scroll to the Features section.
   
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.mobileMenuOpen = false;
  }
    navigateToLogin() {
    this.router.navigate(['/login']);
  }
}

// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { HeaderComponent } from './shared/components/header/header.component';
// import { ProfileFormComponent } from './components/profile-form/profile-form.component';
// import { SystemSettingsComponent } from './components/system-settings/system-settings.component';
// import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
// import { ChangePasswordComponent } from "./components/change-password/change-password.component";
// import { RouterOutlet_1 as RouterOutlet } from "../../node_modules/@angular/router/router_module.d-Bx9ArA6K";
// //import { ChangePasswordComponent } from './components/change-password/change-password.component';

// @Component({
//   selector: 'app-root',
//   imports: [
//     SidebarComponent,
//     HeaderComponent,
//     ProfileFormComponent,
//     ChangePasswordComponent,
//     SystemSettingsComponent,
//     RouterOutlet_1
// ],
//   standalone: true,
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'setting-page';
// }


// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
// @Component({
//   selector: 'app-root',
//   imports: [CommonModule, RouterOutlet, SidebarComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css',
// })
// export class AppComponent {
//   title = 'lms';
//   isSidebarOpen = true;
// }


import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'lms';
  isSidebarOpen = true;
  showSidebar = false;

  // Routes where sidebar should NOT be shown
  private routesWithoutSidebar = ['/', '/login', '/adminsignup', '/studentsignup'];

  constructor(private router: Router) {
    // Listen to route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.showSidebar = !this.routesWithoutSidebar.includes(event.url);
    });
  }
}
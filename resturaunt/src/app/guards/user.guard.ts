// import { CanActivate, CanActivateFn, Router } from '@angular/router';
// import { AuthService } from '../service/auth.service';
// import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class UserGuard implements CanActivate {
//   constructor(
//     private authService: AuthService,
//     private router: Router,
//     @Inject(PLATFORM_ID) private platformId: Object
//   ) {}


//   canActivate(): boolean {
//     if (this.authService.isUser()) {
//       return true;
//     } else {
//       this.router.navigate(['/login']);
//       return false;
//     }
//   }
// }
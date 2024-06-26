import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoMatchPageComponent } from './no-match-page/no-match-page.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UpdateUserDetailComponent } from './update-user-detail/update-user-detail.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { ResourceSectionComponent } from './resource-section/resource-section.component';
import { AddNewResourceComponent } from './add-new-resource/add-new-resource.component';
import { AuthGuard } from './auth.guard';
import { AdminSectionComponent } from './admin-section/admin-section.component';
import { UpdateResourceComponent } from './update-resource/update-resource.component';
import { RoleGuard } from './role.guard';
import { AdminGuard } from './admin.guard';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/user-login',
    pathMatch: 'full'
  },
  {
    path: 'user-login',
    component: UserLoginComponent
  },
  {
    path: 'user-registration',
    component: UserRegistrationComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'user-profile',
        component: UserProfileComponent,
        canActivate: [RoleGuard]
      },
      {
        path: 'add-new-user',
        component: AddUserComponent,
      },
      {
        path: 'remove-user/:id',
        component: DeleteUserComponent
      },
      {
        path: 'update-user-detail/:id',
        component: UpdateUserDetailComponent
      },
      {
        path: 'update-user/:id',
        component: UpdateUserComponent
      },
      {
        path: 'update-password/:id',
        component: UpdatePasswordComponent
      },
      {
        path: 'resource-section',
        component: ResourceSectionComponent
      },
      {
        path: 'add-new-resource',
        component: AddNewResourceComponent
      },
      {
        path: 'admin-section',
        component: AdminSectionComponent,
        canActivate: [AdminGuard]
      },
      {
        path: 'update-resource/:id',
        component: UpdateResourceComponent
      }
    ]
  },
  {
    path: 'user-dashboard',
    loadComponent: () => import('./user-sales-dashboard/dashboard/dashboard/dashboard.component').then(m =>  m.DashboardComponent)
  },
  {
    path: '**',
    component: NoMatchPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

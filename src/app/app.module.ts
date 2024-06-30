import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UpdateUserDetailComponent } from './update-user-detail/update-user-detail.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NoMatchPageComponent } from './no-match-page/no-match-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ResourceSectionComponent } from './resource-section/resource-section.component';
import { PostCommentComponent } from './post-comment/post-comment.component';
import { ResourceCardComponent } from './resource-card/resource-card.component';
import { AddNewResourceButtonComponent } from './add-new-resource-button/add-new-resource-button.component';
import { AddNewResourceComponent } from './add-new-resource/add-new-resource.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';
import { EditButtonComponent } from './edit-button/edit-button.component';
import { LogoutLoaderComponent } from './logout-loader/logout-loader.component';
import { AuthGuard } from './auth.guard';
import { AdminSectionComponent } from './admin-section/admin-section.component';
import { UpdateResourceComponent } from './update-resource/update-resource.component';
import { CommentLoaderComponent } from './comment-loader/comment-loader.component';
import { RoleGuard } from './role.guard';
import { AdminGuard } from './admin.guard';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CustomPaginatorComponent } from './custom-paginator/custom-paginator.component';
import { ResourceItemListComponent } from './resource-item-list/resource-item-list.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { SearchPipe } from './pipe/search.pipe';
import { UserFilterPipe } from './pipe/user-filter.pipe';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { DashboardComponent } from './user-sales-dashboard/dashboard/dashboard/dashboard.component';
import { AnnuallSalesComponent } from './user-sales-dashboard/dashboard/annuall-sales/annuall-sales.component';
import { SoldItemsPercentageComponent } from './user-sales-dashboard/dashboard/sold-items-percentage/sold-items-percentage.component';
import { UserRevenueComponent } from './user-sales-dashboard/dashboard/user-revenue/user-revenue.component';
import { ItemSellingRatioComponent } from './user-sales-dashboard/dashboard/item-selling-ratio/item-selling-ratio.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    DeleteUserComponent,
    UpdateUserDetailComponent,
    UpdatePasswordComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NoMatchPageComponent,
    UserProfileComponent,
    ResourceSectionComponent,
    PostCommentComponent,
    ResourceCardComponent,
    AddNewResourceButtonComponent,
    AddNewResourceComponent,
    LoaderComponent,
    EditButtonComponent,
    LogoutLoaderComponent,
    AdminSectionComponent,
    UpdateResourceComponent,
    CommentLoaderComponent,
    DeleteButtonComponent,
    CustomPaginatorComponent,
    ResourceItemListComponent,
    UpdateUserComponent,
    ContactUsComponent,
    LogoutButtonComponent,
    SearchPipe,
    UserFilterPipe,
    DashboardComponent,
    AnnuallSalesComponent,
    SoldItemsPercentageComponent,
    UserRevenueComponent,
    ItemSellingRatioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule
  ],
  providers: [AuthGuard, RoleGuard, AdminGuard,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

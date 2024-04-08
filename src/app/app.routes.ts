import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { AboutUsComponent } from '../components/about-us/about-us.component';
import { DetailsComponent } from '../components/details/details.component';
import { ProductOrderComponent } from '../components/product-order/product-order.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { JoinUsComponent } from '../components/join-us/join-us.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';

export const routes: Routes = [
     {path:"",redirectTo:'home',pathMatch:"full"},
     {path:'home',component:HomeComponent},
     { path: 'aboutUs', component: AboutUsComponent },
     { path: 'details/:id', component: DetailsComponent },
     { path: 'order', component: ProductOrderComponent },
     {
          path: 'joinUs', component: JoinUsComponent,
          children: [
               {path:"",component:RegisterComponent},
               { path: 'login', component: LoginComponent },
               {path:'register',component:RegisterComponent}
          ]
     },
     {path:'contactUs',component:ContactUsComponent},
     { path: '**', component: NotFoundComponent },
     
];

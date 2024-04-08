import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { ContentComponent } from '../components/content/content.component';
import { ProductsComponent } from '../components/products/products.component';
import { FooterComponent } from '../components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { ProductOrderComponent } from '../components/product-order/product-order.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ContentComponent, ProductsComponent, FooterComponent, FontAwesomeModule, CommonModule, ProductOrderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lap-Standalone-Component';
  faCoffee = faCoffee;
}

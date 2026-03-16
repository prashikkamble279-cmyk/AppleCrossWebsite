import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  imports: [RouterModule, CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {

  constructor(private router: Router) { }

  scrollToServices() {
    const servicesSection = document.querySelector('.service-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  goToContact() {
    this.router.navigate(['/contact']);
  }

  goToProductDetails(id: number) {
    this.router.navigate(['/product-details', id]);
  }


}
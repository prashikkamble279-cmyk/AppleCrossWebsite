import { Routes } from '@angular/router';

import { Home } from './home/home';
import { About } from './about/about';
import { Portfolio} from './portfolio/portfolio';
import { Contact } from './contact/contact';
import { Technologies } from './technologies/technologies';
import { Testimonials } from './testimonials/testimonials';
import { Careers } from './careers/careers';
import { ProductDetails } from './product-details/product-details';

export const routes: Routes = [

  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'services', component: Portfolio },
  { path: 'product-details/:id', component: ProductDetails},
  { path: 'careers', component: Careers },
  { path: 'technologies', component: Technologies },
  { path: 'testimonials', component: Testimonials },
  { path: 'contact', component: Contact }

];
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone:true,
  imports: [RouterModule,CommonModule],
  templateUrl:'./product-details.html',
  styleUrls: ['./product-details.css']
})
export class ProductDetails {

  id:any;
  constructor(private route:ActivatedRoute){
    this.id = this.route.snapshot.paramMap.get('id');
  }

}

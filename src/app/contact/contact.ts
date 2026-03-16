import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements AfterViewInit {

  cardsVisible = false;
  mapVisible = false;
  formVisible = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    // Staggered reveal animations
    setTimeout(() => {
      this.cardsVisible = true;
      this.cdr.detectChanges();
    }, 300);
    setTimeout(() => {
      this.mapVisible = true;
      this.cdr.detectChanges();
    }, 600);
    setTimeout(() => {
      this.formVisible = true;
      this.cdr.detectChanges();
    }, 800);
  }

  sendMessage(): void {
    alert('Message Sent Successfully!');
  }

}

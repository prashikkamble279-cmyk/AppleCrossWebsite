import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './careers.html',
  styleUrl: './careers.css',
})
export class Careers {
  constructor(private router: Router) {}

  goToServices() {
    this.router.navigate(['/services']);
  }

  jobs = [
    {
      date: '2026-03-08',
      title: 'Senior Java Developer',
      description: 'Design and develop scalable enterprise-grade applications using Java, Spring Boot, and microservices architecture.',
      experience: '2+ Years',
      location: 'Pune, India',
      openings: 4,
      type: 'Full-Time',
      skills: ['Java', 'Spring Boot', 'Microservices', 'REST API', 'SQL']
    },
    {
      date: '2026-03-03',
      title: 'Junior Java Developer',
      description: 'Collaborate with senior developers to build and maintain Java applications. Great opportunity for freshers to learn and grow.',
      experience: '0–1 Year (Fresher)',
      location: 'Pune, India',
      openings: 3,
      type: 'Full-Time',
      skills: ['Java', 'Core Java', 'JDBC', 'MySQL', 'Git']
    },
    {
      date: '2026-02-25',
      title: 'Python Developer',
      description: 'Build automation scripts, REST APIs, and data processing pipelines using Python and modern frameworks.',
      experience: '0–1 Year (Fresher)',
      location: 'Pune, India',
      openings: 2,
      type: 'Full-Time',
      skills: ['Python', 'Django', 'Flask', 'REST API', 'PostgreSQL']
    },
    {
      date: '2026-03-01',
      title: 'Frontend Developer',
      description: 'Create responsive, pixel-perfect user interfaces with Angular, React, or Vue. Strong CSS and design sense required.',
      experience: '0–1 Year (Fresher)',
      location: 'Pune, India',
      openings: 3,
      type: 'Full-Time',
      skills: ['Angular', 'TypeScript', 'HTML/CSS', 'JavaScript', 'Figma']
    },
    {
      date: '2026-03-05',
      title: 'Data Analytics Developer',
      description: 'Transform raw data into actionable insights using analytics tools, SQL, and visualization platforms.',
      experience: '0–1 Year (Fresher)',
      location: 'Pune, India',
      openings: 2,
      type: 'Full-Time',
      skills: ['SQL', 'Power BI', 'Python', 'Excel', 'Tableau']
    },
    {
      date: '2026-03-12',
      title: 'UI/UX Design Intern',
      description: 'Assist in creating wireframes, prototypes, and visual designs for web and mobile applications under expert mentorship.',
      experience: 'Fresher / Student',
      location: 'Remote',
      openings: 2,
      type: 'Internship',
      skills: ['Figma', 'Adobe XD', 'Wireframing', 'Prototyping', 'UI Design']
    }
  ];

  scrollToOpenings(): void {
    const el = document.getElementById('openings');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

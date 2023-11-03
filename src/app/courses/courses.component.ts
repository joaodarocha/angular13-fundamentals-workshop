import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses = [
    {
      id: 1,
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'JavaScript awesome course',
      description: 'Learn everything about JS',
      percentComplete: 33,
      favorite: true
    }
  ];
  selectedCourse = null;

  constructor() {
  }

  ngOnInit(): void {
  }

  selectCourse(course) {
    this.selectedCourse = course;
  }
}

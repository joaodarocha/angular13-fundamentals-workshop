import { Component, OnInit } from '@angular/core';
import { Course } from '../common/models/course';
import { CourseService } from '../common/services/course.service';

const emptyCourse: Course = {
  id: null,
  title: '',
  description: '',
  percentComplete: 0,
  favorite: false,
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses = [];
  selectedCourse = emptyCourse;
  originalTitle = '';

  constructor(private coursesService: CourseService) {
  }

  ngOnInit(): void {
    this.fetchCourses();
  }

  fetchCourses() {
    this.coursesService.all().subscribe((result: Course[]) => this.courses = result);
  }

  selectCourse(course) {
    this.selectedCourse = { ...course };
    this.originalTitle = course.title;
  }

  saveCourse(course) {
    this.coursesService.save(course)
        .subscribe(() => this.fetchCourses())
  }

  deleteCourse(courseId) {
    this.coursesService.delete(courseId)
        .subscribe(() => this.fetchCourses())
  }

  reset() {
    this.selectCourse({ ...emptyCourse });
  }
}

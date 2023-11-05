import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../models/course';

const BASE_URL = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  model = 'courses';

  constructor(private http: HttpClient) {
  }

  all() {
    return this.http.get(this.getUrl())
  }

  getCourseById(id: string) {
    return this.http.get(this.getUrlById(id))
  }

  delete(id: string) {
    return this.http.delete(this.getUrlById(id))
  }

  save(course: Course) {
    if (!course.id) {
      return this.create(course);
    }
    else {
      return this.update(course);
    }
  }

  create(course) {
    return this.http.post(this.getUrl(), course)
  }

  update(course) {
    return this.http.put(this.getUrlById(course.id), course)
  }

  private getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  private getUrlById(id: string) {
    return `${BASE_URL}/${this.model}/${id}`;
  }

}

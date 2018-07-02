import { Component, OnInit } from '@angular/core';

import { ICourse } from '../../entities/course';
import { MemoryCourseService } from '../../services/course-service/MemoryCourseService';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css'],
})
export class CoursesPageComponent implements OnInit {

  public courses: ICourse[];
  public searchQuery: string;

  public constructor(
    public courseService: MemoryCourseService,
  ) {
    this.courses = [];
  }

  public ngOnInit() {
    this.courses = this.courseService.getCourses();
  }

  public deleteCourse(id: string) {
    this.courses = this.courseService.deleteCourse(id);
    console.log(`Course ${id} has been deleted`);
    if (this.searchQuery) {
      this.search(this.searchQuery);
    }
  }

  public search(searchQuery: string) {
    this.searchQuery = searchQuery;
    this.courses = this.courseService.search(searchQuery);
    console.log(`Search by ${searchQuery}`);
  }

  public loadMore() {
    console.log('Load more');
  }

}

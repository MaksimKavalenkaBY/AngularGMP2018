import { Author } from './author';

export class Course {
  public id: string;
  public title: string;
  public duration: number;
  public creationDate: Date;
  public description: string;
  public authors: Author[];
  public isTopRated: boolean;

  public constructor(course: any) {
    this.id = course.id;
    this.title = course.title;
    this.duration = course.duration;
    this.creationDate = new Date(course.creationDate);
    this.description = course.description;
    this.authors = course.authors;
    this.isTopRated = !!course.isTopRated;
  }
}

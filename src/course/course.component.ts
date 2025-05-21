import { Component } from '@angular/core';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, NgFor, TitleCasePipe} from '@angular/common';
import { CoursesService } from './courses.service';
import { FormsModule } from '@angular/forms';
import { SummaryPipe } from '../app/summary.pipe';
import { FormatPipe } from '../app/format.pipe';


@Component({
  selector: 'app-course',
  imports: [NgFor, FormsModule, CurrencyPipe, DatePipe, LowerCasePipe, DecimalPipe, SummaryPipe, TitleCasePipe, FormatPipe],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
  providers: [CoursesService]
})
export class CourseComponent {
  textInput = ""
  courses;
  title = "List of courses"
  email: string = "me@email.com";
course = {
  title: "Hi there",
  rating: 4.876,
  students: 30123,
  price: 190.21,
  releaseDate: new Date(2016, 3, 1)
}
text = "HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH"

  constructor(private service: CoursesService) {
      this.courses = this.service.getCourses();
  }
 
  public getTitle() {
    return this.title
  }

  onKeyUp() {
    console.log(this.email)
  }
}

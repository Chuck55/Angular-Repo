import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.css'
})
export class CourseFormComponent {
    categories = [
      {name: "Development", id: 1},
      {name: "Art", id: 2},
      {name: "Languages", id: 3}
    ]

    submit(course) {
      console.log(course)
    }
}

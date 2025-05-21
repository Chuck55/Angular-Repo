import { Component } from '@angular/core';
import { CourseComponent } from '../course/course.component';
import { FavoriteChangedEventArgs, FavoriteComponent } from "../favorite/favorite.component";
import { PanelComponent } from "../panel/panel.component";
import { CommonModule } from '@angular/common';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from "../zippy/zippy.component";
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { CourseFormComponent } from "./course-form/course-form.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, CourseFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
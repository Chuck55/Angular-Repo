import {Injectable} from '@angular/core'

@Injectable()
export class CoursesService {

    courses = ["course1", "course2", "course3"]
    public getCourses() {
        return this.courses;
    }
}
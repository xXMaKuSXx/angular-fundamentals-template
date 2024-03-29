import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { faAdd, faTrash, fas } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-course-form",
  templateUrl: "./course-form.component.html",
  styleUrls: ["./course-form.component.scss"],
})
export class CourseFormComponent implements OnInit {
  constructor(public fb: FormBuilder, public library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
  courseForm!: FormGroup;
  // Use the names `title`, `description`, `author`, 'authors' (for authors list), `duration` for the form controls.
  ngOnInit(): void {
    this.courseForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(2)]],
      description: ["", [Validators.required, Validators.minLength(2)]],
      author: [
        "",
        [Validators.pattern(/^[a-zA-Z0-9 ]*$/), , Validators.minLength(2)],
      ],
      authors: this.fb.array([], [Validators.required]),
      courseAuthors: this.fb.array([], [Validators.required]),
      duration: [0, [Validators.required, Validators.min(0)]],
    });
  }

  getAuthors(): FormArray {
    return this.courseForm.get("authors") as FormArray;
  }

  getCourseAuthors(): FormArray {
    return this.courseForm.get("courseAuthors") as FormArray;
  }

  addAuthor() {
    const author = this.courseForm.get("author")?.value;
    if (author) {
      (this.courseForm.get("authors") as FormArray).push(
        this.fb.control(author)
      );
    }
    this.courseForm.get("author")?.reset();
  }

  addCourseAuthor(index: number) {
    const authorsArray = this.getAuthors();
    const courseAuthorsArray = this.getCourseAuthors();

    const author = authorsArray.at(index).value;
    courseAuthorsArray.push(this.fb.control(author));
  }

  removeAuthor(index: number) {
    (this.courseForm.get("courseAuthors") as FormArray).removeAt(index);
  }

  onSubmit(): void {
    console.log(this.courseForm.value);
  }

  cancel(): void {
    window.location.reload();
  }

  deleteIcon = faTrash;
  addIcon = faAdd;
}

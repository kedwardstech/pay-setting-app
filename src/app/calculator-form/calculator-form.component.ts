import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../enrollment.service';
import { User } from '../user';

@Component({
  selector: 'app-calculator-form',
  templateUrl: './calculator-form.component.html',
  styleUrls: ['./calculator-form.component.css']
})

export class CalculatorFormComponent implements OnInit {
  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;

userModel = new User('Rob', 'rob@test.com', 5656565622, 'default', 'evening', false);

validateTopic(value) {
  if (value === 'default') {
    this.topicHasError = true; 
  } else {
      this.topicHasError = false;
    }
}

onSubmit() {
  this._enrollmentService.enroll(this.userModel)
    .subscribe(
      data => console.log('Success!', data),
      error => console.log('Error!', error)
    )
}
  constructor(private _enrollmentService: EnrollmentService) { }
 
  ngOnInit(): void {
  }

}

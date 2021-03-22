import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '@app/core/services/event.service';
import { IProcessVm } from '@app/models';
import { Subject } from 'rxjs';
import { first, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  processForm: FormGroup;
  private unsubscribe$ = new Subject();
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private processService: EventService
  ) {}

  ngOnInit() {
      this.processForm = this.formBuilder.group({
        numberOfBatches: ['', Validators.required],
        numberToProcess: ['', Validators.required]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.processForm.controls; }

  onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.processForm.invalid) {
          return;
      }
      const processVm: IProcessVm = {
        numberOfBatch: +this.processForm.value.numberOfBatches,
        batchSize: +this.processForm.value.numberToProcess,
      };
      this.processService
      .process(processVm)
      .pipe(first(), takeUntil(this.unsubscribe$))
      // tslint:disable-next-line: deprecation
      .subscribe(
        () => {
          alert('sucess');
        },
        (ex) => {
          console.log(ex);
        }
      );
      this.loading = true;
  }
}

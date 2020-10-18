import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms'

@Component({
  selector: 'app-demo-formbuilder',
  templateUrl: './demo-formbuilder.component.html',
  styleUrls: ['./demo-formbuilder.component.css']
})
export class DemoFormbuilderComponent implements OnInit {

  myForm: FormGroup;
  // V1: Sometimes defining formControl for each field could be verbose and hard to mantain
  // V2: We can refer in the view directly to the FormGroup's field
  sku: AbstractControl;

  constructor(formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      'sku': ['', Validators.compose([Validators.required, skuValidator])]
    });
    this.myForm.valueChanges.subscribe(
      (form: any) => {
        console.log(form);
      }
    )

    this.sku = this.myForm.controls['sku'];
    this.sku.valueChanges.subscribe(
      (value: string) => {
        console.log(value);
      }
    );
  }

  ngOnInit(): void {
  }
  
  onSubmit(form: any): Boolean {
    console.log(form);
    return false;
  }
}

function skuValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^123/)) {
    return {invalidSku: true}
  }
}

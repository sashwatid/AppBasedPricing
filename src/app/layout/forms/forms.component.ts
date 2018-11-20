import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '../../app.service';
//import { DataSource } from '@angular/cdk/collections';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  bookForm: FormGroup;
  isbn:string='';
  title:string='';
  description:string='';
  author:string='';
  publisher:string='';
  published_year:string='';
  //dataSource = new AppDataSource(this.api);

  constructor(private router: Router, private api: AppService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
     'isbn' : [null, Validators.required],
     'title' : [null, Validators.required],
     'description' : [null, Validators.required],
     'author' : [null, Validators.required],
     'publisher' : [null, Validators.required],
     'published_year' : [null, Validators.required]
   });
    //this.api.getAttributes()
    //   .subscribe(res => {
      //   console.log(res);
//         this.books = res;
  //     }, err => {
    //     console.log(err);
      // });
   }


  onFormSubmit(form:NgForm) {
    this.api.postQuote(form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/dashBoard']);
        }, (err) => {
          console.log(err);
        });
  }
}
//export class AppDataSource extends DataSource<any> {
  //constructor(private api: AppService) {
    //super()
  //}

  //connect() {
    //return this.api.getAttributes();
  //}

  //disconnect() {

  //}
//}

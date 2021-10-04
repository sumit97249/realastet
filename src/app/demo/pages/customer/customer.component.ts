import {
  Component,
  OnInit
} from '@angular/core';
import {
  map
} from 'rxjs/internal/operators/map';
import {
  ApiService
} from '../../service/api.service';
import {
  FormArray,
  FormControl,
  FormGroup,
  Validators,
  FormsModule
} from '@angular/forms'

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customer: any[];
  key: any;
  tital:string;

  constructor(private apiservice: ApiService) {}
  reactiveform: any;
  ngOnInit(): void {
    this.reactiveform = new FormGroup({
      'first_name': new FormControl(null, [Validators.required]),
      'last_name': new FormControl(null, [Validators.required]),
      'Email': new FormControl(null, [Validators.required, Validators.email]),
      'Phone': new FormControl(null, Validators.required),
      'Data': new FormControl(null, Validators.required)

    });
    this.getCustomer();
  }


  addCustomer(data: any) {
    this.reactiveform.reset
    this.tital ='Add Customer'
    this.apiservice.addCostomer(data).subscribe(() => {
      this.getCustomer();
      
    })
    
  }
  getCustomer() {
    const arr: any[] = []
    this.apiservice.getCostomer().pipe(map((resdata: any) => {
        for (const key in resdata) {
          arr.push({
            key: key,
            ...resdata[key]
          })
        }
        return arr
      }))
      .subscribe(res => {
        this.customer = res
      })
  }
  update(key) {
    this.tital =' Edit Customer'
    this.apiservice.getedit(key).subscribe((res) => {
      this.reactiveform.patchValue(res)

    });
    this.key = key

  }
  removeUser(key) {
    if ( confirm('can you remove clinte ?') ){
    this.apiservice.delet(key)
      .subscribe(() => {
        this.getCustomer();
      });
    }
  }
  editcustomer(data,editCustomer) {
    this.apiservice.updeteClint(this.key, data)
      .subscribe(() => {
        this.getCustomer();
      });
     

  }

}

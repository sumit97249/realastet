import {
  Component,
  OnInit
} from '@angular/core';
import {
  AuthService
} from 'src/app/demo/service/auth.service';


@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent implements OnInit {
  public password: any;
  public email: any
  constructor(private Authservice: AuthService) {}
  isActive:boolean
  ngOnInit() {
    this.isActive = true
  }

  singin(data: any) {
    console.log(data)
    this.Authservice.singIn(data)
  }
  show(){
    this.isActive = true;
    
  }
  hide(){
    this.isActive = false;
    
  }
}

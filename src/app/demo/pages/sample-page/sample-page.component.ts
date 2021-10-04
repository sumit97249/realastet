import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { seoChartData1 } from './chart1'
import { seoChartData2 } from './chart2'
import { seoChartData3 } from './chart3'
import { seoChartData4 } from './chart4'
import { map } from 'rxjs/operators';
import firebase from 'firebase/app'
import { AngularFireDatabase } from '@angular/fire/database'
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-sample-page',
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss']
})
export class SamplePageComponent implements OnInit {

 public seoChartData1 :any;
 public seoChartData2 :any;
 public seoChartData3 :any;
 public seoChartData4 :any;
 todo:any
 public todo_list_message_error: boolean;
  constructor( private  apiService: ApiService, private db: AngularFireDatabase,private datePipe: DatePipe ) { }
  uid:any;
  TodayCustomer:any;
  ngOnInit() {
    this.uid = localStorage.getItem('userid')
    this.seoChartData1  =  seoChartData1.supportChartData;
    this.seoChartData2  =  seoChartData2.supportChartData;
    this.seoChartData3  =  seoChartData3.supportChartData;
    this.seoChartData4  =  seoChartData4.supportChartData;
   this.getTask()
   this.getCustomer();
   
  }
  getTask(){
    const arr: any[] = []
    this.apiService.getTodo(this.uid).pipe(map((resdata: any) => {
      for (const key in resdata) {
        arr.push({
          key: key,
          ...resdata[key]
        })
      }
      return arr
    }))
    .subscribe(res => {
      // this.respons = res
      console.log(res)
      this.todo = res
    })
  }
  addTask(Task: any){
    this.apiService.postTodo(Task , this.uid).subscribe(res=>{
      console.log(Task,res) 
      this.getTask()
    })
  }
  
  delete_todo(taskKey){
   if ( confirm('can you remove task ?') ) {
     this.apiService.deletTask(taskKey,this.uid).subscribe(res=>{
       console.log(res);
       this.getTask()
     })
   }
  }
 

  completeTodoList(e,todokey,todo) {
    
    const value :boolean = e.target.checked
    firebase.database().ref("todo/"+this.uid+"/"+todokey).set({
      value,
      task: todo,
     
    });
    
    e.target.parentElement.classList.remove('done-task');
    if (value) {
      e.target.parentElement.classList.add('done-task');
    }
 
  }
  getCustomer(){
   
    let date:any = this.datePipe.transform(Date.now(), 'yyyy-MM-dd');
    const arr: any[] = []
    this.apiService.getCostomer().pipe(map((resdata: any) => {
      for (const key in resdata) {
        arr.push({
          key: key,   
          ...resdata[key]
        })
      }
      return arr
    }))
    .subscribe((res:any) => {
      this.TodayCustomer = res.filter((data:any) =>  date == data.Data)
      
     
      
    })
    
  }

}

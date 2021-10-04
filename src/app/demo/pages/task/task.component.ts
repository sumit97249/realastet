import {
  Component,
  OnInit
}

from '@angular/core';

import {
  ApiService
}

from '../../service/api.service';

import {
  Observable
}

from 'rxjs';

import {
  FormControl,
  FormGroup,
  Validators
}

from '@angular/forms';

import {
  map
}

from 'rxjs/internal/operators/map';



@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss']
  }

) export class TaskComponent implements OnInit {
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = 'id';
  public sortOrder = 'asc';
  public taskObservable: any;
  mfDataTable
  taskdata: any
  key: any;
  constructor(private apiService: ApiService) {}

  // taskObservable:boolean = true
  reactiveform: FormGroup
  reactiveformEdit: any;

  ngOnInit() {
    this.getTask()
    this.reactiveform = new FormGroup({
        'task': new FormControl(null, [Validators.required]),
        'date': new FormControl(null, [Validators.required]),

      }

    );

    // if (this.taskdata == null && this.taskdata == '') {
    // this.taskObservable = false
    // }

  }

  getTask() {
    const arr: any[] = []

    this.apiService.getTask().pipe(map((resdata: any) => {
        for (const key in resdata) {
          arr.push({
            key: key,
            ...resdata[key]
          })
        }
        return arr
      }

    )).subscribe(res => {
        this.taskObservable = res

        // console.log(this.taskObservable, res);

      }

    )
  }

  addTask(task) {
    this.apiService.addTask(task).subscribe(res => {
        // console.log(res);
        this.getTask()
      }

    )
  }
  upDateTask(value) {
    this.apiService.editTask(this.key, value).subscribe(() => {
        // console.log(res);
        this.getTask()
      }

    )

  }
  TAskkey(key) {
    this.key = key
    this.apiService.edit(this.key).subscribe(res => {
      this.reactiveform.patchValue(res)
      // let task:any = res/

      this.getTask()
    })

  }
  remove(key) {
    if (confirm('Remove Task ?')) {

      this.apiService.removeTask(key).subscribe(res => {
       
        this.getTask()
      })
    }

  }




}

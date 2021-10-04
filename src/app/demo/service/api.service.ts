  import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http :HttpClient) { }
 ///////////////////////////////// sampale page ////////////////////////////
  getTodo(uid){
    let url="https://realestate-142b9-default-rtdb.firebaseio.com/todo/"+uid+".json"
    return this.http.get(url)
  }
  postTodo(todo:any,uid){
    let url="https://realestate-142b9-default-rtdb.firebaseio.com/todo/"+uid+".json"
    return this.http.post(url,todo)
  }
  deletTask(taskKey,uid){
    let url="https://realestate-142b9-default-rtdb.firebaseio.com/todo/"+uid+"/"+taskKey+".json"
    return this.http.delete(url)
  }
  // https://firestore.clients6.google.com/v1/projects/realestate-142b9/databases/(default)/documents/datat
  

   ///////////////////////////////// task ////////////////////////////

    ///////////////////////////////// customer ////////////////////////////
    addCostomer(data){
      let url="https://realestate-142b9-default-rtdb.firebaseio.com/costomer.json"
      return this.http.post(url,data)
    }
    getCostomer(){
      let url="https://realestate-142b9-default-rtdb.firebaseio.com/costomer.json"
      return this.http.get(url)
    }
    getedit(key){
      let url="https://realestate-142b9-default-rtdb.firebaseio.com/costomer/"+key+".json"
      return this.http.get(url)
    }
    updeteClint(key,data){
      let url="https://realestate-142b9-default-rtdb.firebaseio.com/costomer/"+key+".json"
      console.log(url);
      
      return this.http.put(url,data)
    }
    delet(key){
      let url="https://realestate-142b9-default-rtdb.firebaseio.com/costomer/"+key+".json"
      return this.http.delete(url)
    }

    getTask(){
      let url="https://realestate-142b9-default-rtdb.firebaseio.com/task.json"
      return this.http.get(url)
    }
    addTask(task){
      let url="https://realestate-142b9-default-rtdb.firebaseio.com/task.json"
      return this.http.post(url,task)
    }
    editTask(key,value){
      let url="https://realestate-142b9-default-rtdb.firebaseio.com/task/"+key+".json"
      return this.http.put(url,value)
    }
    edit(key){
      let url="https://realestate-142b9-default-rtdb.firebaseio.com/task/"+key+".json"
      return this.http.get(url)
    }
    removeTask(key){
      let url="https://realestate-142b9-default-rtdb.firebaseio.com/task/"+key+".json"
      return this.http.delete(url)
    }



}

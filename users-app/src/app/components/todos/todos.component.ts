import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private dataService : DataService) { }

  todoCollection = []
  label : string = "";

  onAddItem(){
    this.dataService.createTodo(this.label)
    .subscribe(response => {
      this.getTodos();
      this.label = "";
    });
  }

  ngOnInit(): void {
    this.getTodos()
  }

  private getTodos(){
    this.dataService.getTodos()
      .subscribe(response => {
        this.todoCollection = <Array<any>> response;
      });
  }

}

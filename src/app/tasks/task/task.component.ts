import { Component,Input, inject } from '@angular/core';

import {Task} from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
@Input({required: true}) task!: Task;

// @Output() complete = new EventEmitter<string>();
// onCompleteTask(){
//   this.complete.emit(this.task.id);
// }
private tasksService = inject(TasksService);

onCompleteTask(){
  this.tasksService.removeTask(this.task.id);
}

}

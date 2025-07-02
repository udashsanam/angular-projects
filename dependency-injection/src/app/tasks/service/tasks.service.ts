import {Injectable, signal} from "@angular/core";
import {Task, TaskStatus} from "../task.model";

@Injectable({
providedIn:'root'
})
export class TasksService {
  private tasks = signal<Task[]>([]);
  allTasks = this.tasks.asReadonly();

  onAddTAsk(taskData: {title: string, description:string}) {

    console.log("task added");
    const  newTask:Task = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN'
    };
    this.tasks.update((oldTasks) => [...oldTasks, newTask]);
  }
  updateTasksStatus(taskId:string, newStatuaT: TaskStatus){
  }

}

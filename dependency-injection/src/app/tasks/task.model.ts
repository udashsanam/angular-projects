import {InjectionToken, Provider} from "@angular/core";

export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
export type TaskStatusOptions =  {
  value:'open' | 'close' | 'in-progress';
taskStatus:string;
text:string;
}[];
export  const  TASK_STATUS_OPTIONS = new InjectionToken<TaskStatusOptions>('task-status-options')
export  const TaskStatusOptions:TaskStatusOptions = [
  {value: 'open',
    taskStatus: 'OPEN',
    text:'Open'
  },
  {value: 'close',
    taskStatus: 'CLOSE',
    text:'Close'
  },  {value: 'in-progress',
    taskStatus: 'IN_PROGRESS',
    text:'In-Progress'
  },

]
export  const  taskStatusOptionProvider: Provider =     {
  provide: TASK_STATUS_OPTIONS,
  useFactory: () => TaskStatusOptions
}

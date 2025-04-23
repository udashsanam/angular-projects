import {DUMMY_USERS} from '../dummy-users';

export interface Task {
  id:string,
  userId:string,
  title: string;
  summary:string;
  dueDate:string
};


export  const DUMMY_TASKS: Task[] = [
  {
    id:'t1',
    userId:'u1',
    title:'Master angular',
    summary:'Learn all hte basic and advanced features of Angular &how to apply them',
    dueDate:'2025-12-31'
  },
  {
    id:'t2',
    userId:'u2',
    title:'build first prototype',
    summary:'Build a first prototype of the online shop website',
    dueDate:'2025-07-11'
  },
  {
    id:'t3',
    userId:'u3',
    title:'Prepare issue template',
    summary:'Prepare and describe an issue template which will help with project management',
    dueDate:'2025-06-15'
  }
];

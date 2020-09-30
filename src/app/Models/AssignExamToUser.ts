import { UserEntity } from './UserEntity';
import { ExamEntity } from './ExamEntity';

export class AssignExamToUser{
    assignedId:number;
    marks:number;
    status:boolean;
    dateOfExam:Date;
    user:UserEntity;
    exam:ExamEntity;
}
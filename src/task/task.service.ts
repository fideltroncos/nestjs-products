import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Task } from "./interfaces/Task";
import { Model } from "mongoose";
import { CreateTaskDto } from './dto/create-task.dto';


@Injectable()
export class TaskService {

    constructor(@InjectModel('task') private taskModel: Model<Task>){}

    //async - await -> para funciones asinncronas
    async getTasks(){
        return await this.taskModel.find();
    }

    async getTask(id: string){
        return await this.taskModel.findById(id);
    }

    createTask(task: CreateTaskDto){
        const newTask = new this.taskModel(task);
        console.log(newTask);
        return 'saved';
    }
}

import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res, ParseIntPipe} from '@nestjs/common';

import { CreateTaskDto } from "./dto/create-task.dto";
import { Request, Response } from "express";
import { TaskService } from "./task.service";
import { Task } from "./interfaces/Task";


@Controller('task')
export class TaskController {

    //Instanciamos taskservice
    constructor(private taskService: TaskService){}

    @Get()
    //con Nest
    //Trabajamos con la interface Task para mostrar el arreglo completo, de decimos que queremos mostrar
    //Promise -> por que me esta retornado una promesa, por lo tento esperamos recibir una promesa.
    getTasks(): Promise<Task[]> {
        return this.taskService.getTasks();
    }

    // Con expres -> solo como ejemplo por que también utiliza expres
    // getTask(@Req() req, @Res () res): Response{
    //     return res.send("Hello putita...");
    // }

    @Get(':taskID')
    getTask(@Param('taskID') taskID: string){
        return this.taskService.getTask(taskID);
    }

    @Post()
    createTask(@Body() task: CreateTaskDto): string {
        return this.taskService.createTask(task);
    }

    //Backtigs `` para concatener con funciones de js ${}
    @Delete(':id')
    deleteTask(@Param('id', ParseIntPipe) id): String{
        console.log(typeof id);
        return `Deleting a task number: ${id}`;
    }

    @Put(':id')
    updateTask(@Body() task: CreateTaskDto, @Param('id') id): String{
        console.log(task);
        console.log(task.title);
        console.log(id);
        return `Updating a task number: ${id}`;
    }

}

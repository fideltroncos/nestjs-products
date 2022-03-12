import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskController } from './task/task.controller';
import { TaskService } from './task/task.service';
import { MongooseModule } from "@nestjs/mongoose";
import { TaskModule } from './task/task.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest-tutorial'), TaskModule],
  controllers: [AppController, TaskController],
  providers: [AppService, TaskService],
  exports: []
})
export class AppModule {

}

import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './entities/task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get('byTgId')
  async getByTgId(@Query('tgId') tgId: number): Promise<Task[]> {
    return await this.tasksService.find({
      where: { tgId },
    });
  }

  @Post()
  async create(@Body() task: CreateTaskDto): Promise<Task> {
    return await this.tasksService.save(task);
  }
}

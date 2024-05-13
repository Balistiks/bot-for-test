import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async save(task: CreateTaskDto): Promise<Task> {
    return this.taskRepository.save(task);
  }

  async find(options: FindManyOptions<Task> | null): Promise<Task[]> {
    return this.taskRepository.find(options);
  }
}

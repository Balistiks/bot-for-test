from aiogram import Router, types
from aiogram.filters import Command
from aiogram.fsm.context import FSMContext

from bot.states import AddTask
from bot.services import tasks_service

messages_router = Router()


@messages_router.message(Command('tsk'))
async def get_tasks(message: types.Message):
    tasks = await tasks_service.get_by_tg_id(message.from_user.id)
    text = 'Задачи:\n'
    for task in tasks:
        text += f'\n{task["id"]}. {task["name"]}'
    await message.answer(text)


@messages_router.message(Command('add'))
async def add_task(message: types.Message, state: FSMContext):
    await state.set_state(AddTask.name)
    await message.answer('Напишите название задачи')


@messages_router.message(AddTask.name)
async def get_task_name(message: types.Message, state: FSMContext):
    await tasks_service.create(message.text, message.from_user.id)
    await state.clear()
    await message.answer('Задача создана\n'
                         '\nДля просмотра задач напишите /tsk')

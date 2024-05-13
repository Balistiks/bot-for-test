from aiogram.fsm.state import StatesGroup, State


class AddTask(StatesGroup):
    name = State()

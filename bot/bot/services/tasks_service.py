import aiohttp

from . import url


async def create(name: str, tg_id: int) -> dict:
    async with aiohttp.ClientSession() as session:
        return await (await session.post(f'{url}/tasks', data={
            'tgId': tg_id,
            'name': name,
        })).json()


async def get_by_tg_id(tg_id: int) -> list:
    async with aiohttp.ClientSession() as session:
        return await (await session.get(f'{url}/tasks/byTgId?tgId={tg_id}')).json()

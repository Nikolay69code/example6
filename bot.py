import os
from aiogram import Bot, Dispatcher, types
from aiogram.types import WebAppInfo
from aiogram.utils import executor

API_TOKEN = 'YOUR_BOT_TOKEN'

bot = Bot(token=API_TOKEN)
dp = Dispatcher(bot)

@dp.message_handler(commands=['start'])
async def send_welcome(message: types.Message):
    markup = types.ReplyKeyboardMarkup(resize_keyboard=True)
    markup.add(types.KeyboardButton(
        text="Пройти тест",
        web_app=WebAppInfo(url="https://24platformer-game.ru")
    ))
    
    await message.answer(
        "Привет! Хочешь узнать, какая профессия тебе подходит? Нажми кнопку ниже!",
        reply_markup=markup
    )

@dp.message_handler(content_types=['web_app_data'])
async def web_app_handler(message: types.Message):
    await message.answer(f"Ваш результат: {message.web_app_data.data}")

if __name__ == '__main__':
    executor.start_polling(dp, skip_updates=True)
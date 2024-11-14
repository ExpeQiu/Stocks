from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.controllers import stocks, markets  # 更新导入路径
from src.config.config import settings
from src.schedulers.stock_tasks import start_scheduler

# 其余代码保持不变 
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from src.db.base import get_db  # 更新导入路径
from src.services import stock_service
from src.models.stock import StockResponse, StockCreate
from typing import List

# 其余代码保持不变 
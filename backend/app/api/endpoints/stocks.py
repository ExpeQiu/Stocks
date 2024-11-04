from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from app.db.base import get_db
from app.services import stock_service
from app.schemas.stock import StockResponse, StockCreate
from typing import List

router = APIRouter()

@router.get("/{stock_code}", response_model=StockResponse)
async def get_stock(
    stock_code: str,
    db: AsyncSession = Depends(get_db)
):
    stock = await stock_service.get_stock_by_code(db, stock_code)
    if not stock:
        raise HTTPException(status_code=404, detail="Stock not found")
    return stock

@router.get("/", response_model=List[StockResponse])
async def list_stocks(
    skip: int = 0,
    limit: int = 100,
    db: AsyncSession = Depends(get_db)
):
    stocks = await stock_service.get_stocks(db, skip=skip, limit=limit)
    return stocks 
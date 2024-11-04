from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from app.models.stock import Stock
from typing import List, Optional

async def get_stock_by_code(db: AsyncSession, code: str) -> Optional[Stock]:
    result = await db.execute(select(Stock).filter(Stock.code == code))
    return result.scalar_one_or_none()

async def get_stocks(
    db: AsyncSession,
    skip: int = 0,
    limit: int = 100
) -> List[Stock]:
    result = await db.execute(select(Stock).offset(skip).limit(limit))
    return result.scalars().all() 
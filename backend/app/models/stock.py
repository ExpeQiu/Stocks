from sqlalchemy import Column, Integer, String, Float, DateTime
from app.db.base import Base
from datetime import datetime

class Stock(Base):
    __tablename__ = "stocks"

    id = Column(Integer, primary_key=True, index=True)
    code = Column(String, unique=True, index=True)
    name = Column(String)
    current_price = Column(Float)
    change_percent = Column(Float)
    volume = Column(Float)
    market_cap = Column(Float)
    updated_at = Column(DateTime, default=datetime.utcnow)

class DailyData(Base):
    __tablename__ = "daily_data"

    id = Column(Integer, primary_key=True, index=True)
    stock_id = Column(Integer, index=True)
    date = Column(DateTime, index=True)
    open = Column(Float)
    high = Column(Float)
    low = Column(Float)
    close = Column(Float)
    volume = Column(Float) 
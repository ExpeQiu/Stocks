from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.endpoints import stocks, markets, analysis
from app.core.config import settings

app = FastAPI(
    title="Stock Analysis API",
    description="股票分析系统后端API",
    version="1.0.0"
)

# CORS设置
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 注册路由
app.include_router(stocks.router, prefix="/api/stocks", tags=["stocks"])
app.include_router(markets.router, prefix="/api/markets", tags=["markets"])
app.include_router(analysis.router, prefix="/api/analysis", tags=["analysis"])

@app.get("/")
async def root():
    return {"message": "Welcome to Stock Analysis API"} 
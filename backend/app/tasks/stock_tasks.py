from apscheduler.schedulers.background import BackgroundScheduler
from app.services import stock_service
from app.core.config import settings
from app.db.session import SessionLocal

scheduler = BackgroundScheduler()

@scheduler.scheduled_job('cron', minute='*/5', hour='9-15', day_of_week='mon-fri')
def update_realtime_data():
    db = SessionLocal()
    try:
        stock_service.update_all_realtime_data(db)
    finally:
        db.close()

@scheduler.scheduled_job('cron', hour=15, minute=0, day_of_week='mon-fri')
def update_daily_data():
    db = SessionLocal()
    try:
        stock_service.update_all_daily_data(db)
    finally:
        db.close()

def start_scheduler():
    scheduler.start()

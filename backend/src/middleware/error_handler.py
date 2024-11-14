from fastapi import Request, status
from fastapi.responses import JSONResponse
from typing import Union

async def error_handler(request: Request, exc: Exception) -> JSONResponse:
    return JSONResponse(
        status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
        content={"detail": str(exc)}
    ) 
from pydantic import BaseModel, EmailStr
from typing import Optional

class BookingRequest(BaseModel):
    name: str
    email: EmailStr
    phone: str
    date: str
    service: str
    message: Optional[str] = None
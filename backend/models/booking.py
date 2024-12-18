from pydantic import BaseModel, EmailStr
from typing import Optional

class BookingRequest(BaseModel):
    name: str
    email: EmailStr
    phone: str
    date: str
    service: str
    message: Optional[str] = None

    class Config:
        json_schema_extra = {
            "example": {
                "name": "John Doe",
                "email": "john@example.com",
                "phone": "412-555-0123",
                "date": "2024-03-20",
                "service": "limousine",
                "message": "Wedding transportation request"
            }
        }
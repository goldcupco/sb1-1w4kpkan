from fastapi import APIRouter, HTTPException
from services.email_service import EmailService
from models.booking import BookingRequest

router = APIRouter()

@router.post("/booking")
async def create_booking(booking: BookingRequest):
    try:
        success = await EmailService.send_booking_email(booking)
        if not success:
            raise HTTPException(status_code=500, detail="Failed to send booking email")
        return {"success": True, "message": "Booking request sent successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
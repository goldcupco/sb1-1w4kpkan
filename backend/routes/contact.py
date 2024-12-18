from fastapi import APIRouter, HTTPException
from services.email_service import EmailService
from models.contact import ContactRequest

router = APIRouter()

@router.post("/contact")
async def handle_contact(contact: ContactRequest):
    try:
        success = await EmailService.send_contact_email(contact)
        if not success:
            raise HTTPException(status_code=500, detail="Failed to send contact email")
        return {"success": True, "message": "Contact email sent successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
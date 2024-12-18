import ssl
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import logging
from models.booking import BookingRequest
from models.contact import ContactRequest
from config import settings

logger = logging.getLogger(__name__)

class EmailService:
    @staticmethod
    def _create_smtp_connection():
        context = ssl.create_default_context()
        server = smtplib.SMTP(settings.smtp_server, settings.smtp_port)
        server.ehlo()
        server.starttls(context=context)
        server.ehlo()
        server.login(settings.email_user, settings.email_password)
        return server

    @staticmethod
    async def send_booking_email(booking: BookingRequest) -> bool:
        try:
            message = MIMEMultipart()
            message["From"] = settings.email_user
            message["To"] = settings.recipient_email
            message["Subject"] = f"New Booking Request from {booking.name}"

            body = f"""
            New Booking Request Details:
            
            Name: {booking.name}
            Email: {booking.email}
            Phone: {booking.phone}
            Date: {booking.date}
            Service: {booking.service}
            Message: {booking.message or 'No message provided'}
            """

            message.attach(MIMEText(body, "plain"))

            with EmailService._create_smtp_connection() as server:
                server.send_message(message)
                
            logger.info("Booking email sent successfully!")
            return True
        except Exception as e:
            logger.error(f"Failed to send booking email: {e}")
            return False

    @staticmethod
    async def send_contact_email(contact: ContactRequest) -> bool:
        try:
            message = MIMEMultipart()
            message["From"] = settings.email_user
            message["To"] = settings.recipient_email
            message["Subject"] = f"Contact Form: {contact.subject}"

            body = f"""
            Contact Form Submission:
            
            Name: {contact.name}
            Email: {contact.email}
            Subject: {contact.subject}
            Message: {contact.message}
            """

            message.attach(MIMEText(body, "plain"))

            with EmailService._create_smtp_connection() as server:
                server.send_message(message)
                
            logger.info("Contact email sent successfully!")
            return True
        except Exception as e:
            logger.error(f"Failed to send contact email: {e}")
            return False
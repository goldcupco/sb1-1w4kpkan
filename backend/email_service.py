from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import smtplib
from config import CONFIG

class EmailService:
    @staticmethod
    def send_booking_email(booking_data: dict) -> bool:
        try:
            msg = MIMEMultipart()
            msg["From"] = CONFIG["email"]["sender"]
            msg["To"] = CONFIG["email"]["recipient"]
            msg["Subject"] = f"New Booking Request from {booking_data['name']}"

            body = f"""
            New Booking Request Details:
            
            Name: {booking_data['name']}
            Email: {booking_data['email']}
            Phone: {booking_data['phone']}
            Date: {booking_data['date']}
            Service: {booking_data['service']}
            Message: {booking_data.get('message', 'No message provided')}
            """

            msg.attach(MIMEText(body, "plain"))

            with smtplib.SMTP(CONFIG["email"]["smtp_server"], CONFIG["email"]["smtp_port"]) as server:
                server.starttls()
                server.login(CONFIG["email"]["sender"], CONFIG["email"]["password"])
                server.send_message(msg)
            return True
        except Exception as e:
            print(f"Error sending email: {e}")
            return False
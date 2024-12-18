from http.server import BaseHTTPRequestHandler
import json
from email_service import EmailService
from config import CONFIG

class BookingHandler(BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        self._send_cors_headers()
        self.send_response(200)
        self.end_headers()

    def do_POST(self):
        if self.path == '/api/booking':
            try:
                content_length = int(self.headers['Content-Length'])
                post_data = self.rfile.read(content_length)
                booking_data = json.loads(post_data.decode('utf-8'))
                
                email_service = EmailService()
                success = email_service.send_booking_email(booking_data)
                
                self.send_response(200 if success else 500)
                self._send_cors_headers()
                self.end_headers()
                
                response = json.dumps({
                    "success": success,
                    "message": "Booking request sent successfully" if success else "Failed to send booking request"
                })
                self.wfile.write(response.encode('utf-8'))
            except Exception as e:
                print(f"Error processing request: {e}")
                self.send_error(500, "Internal Server Error")
        else:
            self.send_error(404, "Not Found")

    def _send_cors_headers(self):
        self.send_header('Access-Control-Allow-Origin', CONFIG["server"]["cors_origin"])
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.send_header('Content-Type', 'application/json')
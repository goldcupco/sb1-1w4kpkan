import json
from http.server import BaseHTTPRequestHandler
from typing import Dict, Any

from email_service import send_email
from config import CONFIG

class BookingHandler(BaseHTTPRequestHandler):
    def do_OPTIONS(self) -> None:
        self.send_response(200)
        self.send_cors_headers()
        self.end_headers()

    def do_POST(self) -> None:
        if self.path == '/api/booking':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            booking_data = json.loads(post_data.decode('utf-8'))
            
            success = send_email(booking_data)
            
            self.send_response(200 if success else 500)
            self.send_cors_headers()
            self.end_headers()
            
            response = json.dumps({
                "success": success,
                "message": "Booking request sent successfully" if success else "Failed to send booking request"
            })
            self.wfile.write(response.encode('utf-8'))
        else:
            self.send_response(404)
            self.end_headers()

    def send_cors_headers(self) -> None:
        self.send_header('Access-Control-Allow-Origin', CONFIG["server"]["cors_origin"])
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.send_header('Content-Type', 'application/json')
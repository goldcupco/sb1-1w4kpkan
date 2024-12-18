from http.server import HTTPServer, BaseHTTPRequestHandler
import json
from email_service import EmailService
from config import CONFIG

class CORSRequestHandler(BaseHTTPRequestHandler):
    def _send_cors_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')  # Allow all origins for development
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.send_header('Content-Type', 'application/json')

    def do_OPTIONS(self):
        self.send_response(200)
        self._send_cors_headers()
        self.end_headers()

    def do_POST(self):
        if self.path == '/api/booking':
            try:
                content_length = int(self.headers['Content-Length'])
                post_data = self.rfile.read(content_length)
                booking_data = json.loads(post_data.decode('utf-8'))
                
                success = EmailService.send_booking_email(booking_data)
                
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
                self.send_response(500)
                self._send_cors_headers()
                self.end_headers()
                response = json.dumps({
                    "success": False,
                    "message": str(e)
                })
                self.wfile.write(response.encode('utf-8'))
        else:
            self.send_error(404, "Not Found")

def run_server():
    server_address = (CONFIG["server"]["host"], CONFIG["server"]["port"])
    httpd = HTTPServer(server_address, CORSRequestHandler)
    print(f'Starting server on port {CONFIG["server"]["port"]}...')
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down server...")
        httpd.server_close()

if __name__ == '__main__':
    run_server()
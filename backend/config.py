from pydantic_settings import BaseSettings
from typing import List
import os
from pathlib import Path
from dotenv import load_dotenv

# Load environment variables from .env file
env_path = Path(__file__).parent / '.env'
if env_path.exists():
    load_dotenv(env_path)

class Settings(BaseSettings):
    # Email settings
    email_user: str = os.getenv("EMAIL_USER", "john.thomas@happypetstore.net")
    email_password: str = os.getenv("EMAIL_PASSWORD", "Doggie01!?")
    smtp_server: str = os.getenv("SMTP_SERVER", "smtp.ionos.com")
    smtp_port: int = int(os.getenv("SMTP_PORT", "587"))
    recipient_email: str = os.getenv("RECIPIENT_EMAIL", "wgroarke01@aol.com")

    # Server settings
    server_host: str = "0.0.0.0"
    server_port: int = 8000
    cors_origins: List[str] = ["http://localhost:5173"]

settings = Settings()
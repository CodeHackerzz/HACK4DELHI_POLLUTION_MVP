from database import engine
from models.pollution import Base

print("⏳ Creating tables...")
Base.metadata.create_all(bind=engine)
print("✅ Tables created successfully!")
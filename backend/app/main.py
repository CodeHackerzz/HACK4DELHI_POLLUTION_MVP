from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import pollution

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(pollution.router)

@app.get("/")
def root():
    return {"status": "API running"}
from sqlalchemy import Column, Integer, String, Float
from sqlalchemy.ext.declarative import declarative_base
from geoalchemy2 import Geometry

Base = declarative_base()

class PollutionData(Base):
    __tablename__ = "pollution_data"

    id = Column(Integer, primary_key=True, index=True)
    city = Column(String, index=True)
    pm25 = Column(Float)
    pm10 = Column(Float)
    no2 = Column(Float)
    so2 = Column(Float)
    co = Column(Float)
    location = Column(Geometry("POINT"))
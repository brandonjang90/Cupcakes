from models import db, connect_db, Cupcake
from app import app

db.drop_all()
db.create_all()

c1 = Cupcake(
    flavor="Red Velvet",
    size="Standard", 
    rating=9, 
    image="https://hips.hearstapps.com/hmg-prod/images/red-velvet-cupcakes-1644007548.jpg?crop=0.659xw:0.790xh;0.154xw,0.210xh&resize=980:*")

c2 = Cupcake(
    flavor="Carrot Cake", 
    size="Mini", 
    rating=7, 
    image="https://hips.hearstapps.com/hmg-prod/images/190314-carrot-cake-cupcakes-vertical-2-1553117838.png?crop=1xw:1xh;center,top&resize=980:*")

c3 = Cupcake(
    flavor="Vanilla", 
    size="Standard", 
    rating=6, 
    image="https://hips.hearstapps.com/del.h-cdn.co/assets/18/07/1518475527-vanilla-cupcake-vertical.jpg?crop=1.0xw:1xh;center,top&resize=980:*")

c4 = Cupcake(
    flavor="S'mores", 
    size="Jumbo", 
    rating=10, 
    image="https://hips.hearstapps.com/hmg-prod/images/singleimagebug-s-mores-cupcakes-pin-1553014961.jpg?crop=0.893xw:0.845xh;0.0534xw,0&resize=980:*")


db.session.add_all([c1, c2, c3, c4])
db.session.commit()
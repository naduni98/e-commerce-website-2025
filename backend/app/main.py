from fastapi import FastAPI

app = FastAPI()

# Products Database (temporary)
fake_products_db = [
    {"id": 1, "name": "Laptop", "price": 999.99},
    {"id": 2, "name": "Smartphone", "price": 599.99}
]

@app.get("/")
def home():
    return {"message": "Welcome to our e-commerce API"}

@app.get("/products")
def get_products():
    return fake_products_db

@app.get("/products/{product_id}")
def get_product(product_id: int):
    return next((p for p in fake_products_db if p["id"] == product_id), None)
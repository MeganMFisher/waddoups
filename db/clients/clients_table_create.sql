CREATE TABLE IF NOT EXISTS clients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(180),
    email VARCHAR(180),
    survey boolean DEFAULT FALSE
)
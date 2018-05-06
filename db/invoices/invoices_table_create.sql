CREATE TABLE IF NOT EXISTS invoices (
    id SERIAL PRIMARY KEY,
    total INT,
    client_email VARCHAR(180),
    client_name VARCHAR(180),
    service VARCHAR(180),
    purchased DATE
)
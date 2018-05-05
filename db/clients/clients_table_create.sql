CREATE TABLE IF NOT EXISTS clients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(180),
    email VARCHAR(180),
    survey boolean DEFAULT FALSE,
    subscribe boolean DEFAULT TRUE
)

-- insert into clients (name, email) values ('megan', 'meganmichelle318@gmail.com') returning *;
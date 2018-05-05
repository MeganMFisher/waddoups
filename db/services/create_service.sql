INSERT INTO services
(name, price, description)
VALUES
($1, $2, $3)
RETURNING *;
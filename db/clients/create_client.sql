INSERT INTO clients 
(name, email)
VALUES 
($1, $2)
RETURNING *;
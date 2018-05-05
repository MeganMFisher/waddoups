UPDATE clients 
SET subscribe = false
WHERE email = $1
RETURNING *;
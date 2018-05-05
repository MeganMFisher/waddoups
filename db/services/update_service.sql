UPDATE services 
SET price = $1,
    name = $2,
    description = $3
WHERE id = $4
returning *;
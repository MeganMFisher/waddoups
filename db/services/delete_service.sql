DELETE FROM services 
WHERE id = $1
returning *;
INSERT INTO invoices
(total, client_email, client_name, service, purchased)
VALUES
($1, $2, $3, $4)
RETURNING *;


-- INSERT INTO invoices
-- (total, client_email, client_name, purchased)
-- VALUES
-- (24, 'me@grow.com', 'me', '2018-05-05')
-- RETURNING *;
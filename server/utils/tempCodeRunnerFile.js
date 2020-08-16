let marcBirthday = ['marc birthday', '9/1/2020', '02:00 PM', '08:00 PM', 'Mohegan Sun', 'birthday parteeee', 4, 'marc123']
let stellaWedding = ['stella wedding', '2/3/2021', '05:00 PM', '08:00 PM', 'Castle in Ireland', 'weddingggg', 3, 'stella123']
db.query(queries.createEvent, marcBirthday);
db.query(queries.createEvent, stellaWedding);

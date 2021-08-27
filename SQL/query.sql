IF NOT EXISTS (SELECT relname 
			FROM pg_class 
			WHERE relname = 'studentinfo')


CREATE TABLE studentinfo (
	FirstName varchar(255),
	LastName varchar(255),
	StudentEmail varchar(255),
	Faculty varchar(255),
	Club varchar(255),
	currentYear int,
	Hobby varchar(255),
	CampusComments varchar(255)
);

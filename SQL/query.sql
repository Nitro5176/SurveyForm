IF NOT EXISTS (SELECT relname 
			FROM pg_class 
			WHERE relname = 'studentinfo')


CREATE TABLE studentinfo (
	FirstName varchar(255),
	LastName varchar(255),
	StudentEmail varchar(255),
	Faculty varchar(255),
	Club varchar(255),
	currentYear varchar(255),
	Hobby varchar(255),
	CampusComments varchar(255)
);


INSERT INTO studentinfo(FirstName, LastName, StudentEmail, Faculty, Club, currentYear, hobby, CampusComments)
VALUES('writtensadfasdf', 'what', 'what is going on ', 'sciences', 'boxing', 'Sophomore', 'Boxing', 'wrong');
/*when having errors with modules:
Delete the node_modules directory
Delete the package-lock.json file
Run npm install
*/

/*
var firstName = $('#fName').val();
var lastName = $('#lName').val();
var studentEmail = $('#studentEmail').val();
var faculty= $('#facultyText').val();
var club = $('#studentClub').val();
var year = $('#yearText').val();
var hobby = $('#hobbyText').val();
var comments = $('#commentSection').val();
*/
const {Client} = require('pg');

 const client = new Client ({
     host:"localhost",
     user:"postgres",
     port: 5432,
     password: "password",
     database: "SurveyForm"
 })

 client.connect();

 client.query(`INSERT INTO studentinfo(FirstName, LastName, StudentEmail, Faculty, Club, currentYear, hobby, CampusComments)
            VALUES('testing', 'test', 'working@gmail.com', 'Science', 'Swimming', 'Junior', 'Reading', 'Everything is wrong');`, (err, res)=>{
                if(!err){
                    console.log("success");
                }
                else{
                    console.log(err.message);
                }
                client.end;
            })
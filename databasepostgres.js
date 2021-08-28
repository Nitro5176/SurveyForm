var firstName = $('#fName').val();
var lastName = $('#lName').val();
var studentEmail = $('#studentEmail').val();
var faculty= $('#facultyText').val();
var club = $('#studentClub').val();
var year = $('#yearText').val();
var hobby = $('#hobbyText').val();
var comments = $('#commentSection').val();

 //const {Client} = require('pg');
const http = require("http");

 const client = new Client ({
     host:"localhost",
     user:"postgres",
     port: 5432,
     password: "password",
     database: "SurveryForm"
 })

 client.connect();

 client.query(`INSERT INTO studentinfo(FirstName, LastName, StudentEmail, Faculty, Club, currentYear, CampusComments)
            VALUES(firstName, lastName, studentEmail, faculty, club, year, hobby, comments);`, (err, res)=>{
                if(!err){
                    console.log("success");
                }
                else{
                    console.log(err.message);
                }
                client.end;
            })
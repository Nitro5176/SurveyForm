

function submitButton(tagJquery){
          
    var firstName = $('#fName').val();
    var lastName = $('#lName').val();
    var studentEmail = $('#studentEmail').val();
    var faculty= $('#facultyText').val();
    var club = $('#studentClub').val();
    var year = $('#yearText').val();
    var hobby = $('#hobbyText').val();
    var comments = $('#commentSection').val();
        
    const {Client} = require('pg');

    const client = new Client ({
        host:"localhost",
        user:"postgres",
        port: 5432,
        password: "password",
        database: "SurveyForm"
    })

    const text=`INSERT INTO studentinfo(FirstName, LastName, StudentEmail, Faculty, Club, currentYear, hobby, CampusComments)
    VALUES($1, $2, $3, $4, $5, $6, $7, $8);`
    const valuesUsed=[firstName, lastName, studentEmail, faculty, club,
    year, hobby, comments];

    client.connect();

    client.query(text, valuesUsed, (err, res)=>{
                    if(!err){
                        console.log("success");
                    }
                    else{
                        console.log(err.message);
                    }
                    client.end;
                })


}

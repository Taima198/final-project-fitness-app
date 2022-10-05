
`http://localhost:5000/Clients/register-1`

// part 1 of regerteration, back-end have to check if email already exists or not
payload data: 
const payload={
            "email":state.email,
            "password":state.password
        }

response: //in case of success
{
        status: "accepted",
        message: "Client email added!"
    }

response: //in case of fail
{
        status: "failed",
        message: "Email already exists!" or "weak password" or " " ....
    }
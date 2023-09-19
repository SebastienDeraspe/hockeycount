export default function handler(req, res) {
    res.status(200).json({
        "users" :  {
            "userId" : "1", 
            "firstName" : "Sébastien",
            "lastName" : "Deraspe",    
            "email" : "sebastien@cobia.ca",    
            "password" : "1234"    
        },
    });
  }
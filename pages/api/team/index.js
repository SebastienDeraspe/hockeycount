export default function handler(req, res) {
    res.status(200).json({
        "users" :  {
            "teamId" : "1", 
            "name" : "Sébastien",
            "logo" : "Deraspe",    
            "color" : "sebastien@cobia.ca",    
            "city" : "Saint-Hyacinthe",    
            "sportId" : "1",    
            "ageId" : "5",    
            "divisionId" : "2",    
            "userAdmin" : "1",    
        },
    });
  }
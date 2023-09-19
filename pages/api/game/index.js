

export default function handler(req, res) {
    res.status(200).json({
        "games" :  {
            "gameId" : "1",
            "team1Name" : "Mousquetaire",
            "team2Name" : "Marinier", 
            "periode1": {
                "tir": 0,
                "tirContre": 0,
                "but": 0,
                "butContre": 0
            },
            "periode2": {
                "tir": 0,
                "tirContre": 0,
                "but": 0,
                "butContre": 0
            },
            "periode3": {
                "tir": 0,
                "tirContre": 0,
                "but": 0,
                "butContre": 0
            }
        }
    });
  }
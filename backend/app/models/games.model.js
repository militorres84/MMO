const sql = require("./db.js");

// constructor
const Games = function(games) {
    this.title = games.title;
    this.genre = games.genre;
    this.release_date = games.release_date;
    this.thumbnail = games.thumbnail;
    this.short_description = games.short_description;
    this.publisher = games.publisher;
};

Games.create = (newGames, result) => {
    sql.query("INSERT INTO Games SET ?", newGames, (err, res) => {
    if (err) {
        console.log("error: ", err);
            result(err, null);
            return;
    }

    console.log("created Games: ", { id: res.insertId, ...newGames });
    result(null, { id: res.insertId, ...newGames });
    });
};

module.exports = Games;
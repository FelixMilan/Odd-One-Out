const games = [];
module.exports.addGame = (game) => {
    games.push(game);
}

module.exports.removeGame = (game) => {
    const index = games.indexOf(game);;
    games.splice(index, 1);
}

module.exports.getGameByLobbyCode = (lobbyCode) => {
    return games.find(game => game.lobbyCode == lobbyCode);
}
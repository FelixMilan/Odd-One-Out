const games = [];
const addGame = (game) => {
    games.push(game);
}

const removeGame = (game) => {
    const index = games.indexOf(game);;
    games.splice(index, 1);
}

const getGameByLobbyCode = (lobbyCode) => {
    return games.find(game => game.lobbyCode == lobbyCode);
}

module.exports = {
    addGame,
    removeGame,
    getGameByLobbyCode
}
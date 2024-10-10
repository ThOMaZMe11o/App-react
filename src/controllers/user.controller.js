const create = (req, res) => {
    const {name, username, email, password, avatar, background} = req.body;

    if (!name || !username || !email || !password || !avatar || !background) {

    }

    res.json (user)
}


module.exports = { create };
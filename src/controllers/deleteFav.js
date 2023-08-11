const {Favorite} = require ("../DataBase/DB_connection");

module.exports = async (req, res) => {
    const {id} = req.params;

    try {
        await Favorite.destroy({where:{id}})
        const allFavs = Favorite.findAll()

        res.status(200).json(allFavs)

    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
const {Favorite} = require ('../DataBase/DB_connection');

module.exports = async (req, res) =>{
    const {id, name, origin, status, gender, image, species} = req.body;

    if([id, name, origin, status, gender, image, speciesid, name, origin, status, gender, image, species].every(Boolean)) 
    return res.status(401).json({error:"Faltan Datos"})

try {
    await Favorite.findOrCreate({where:{
        id, 
        name, 
        origin, 
        status, 
        gender, 
        image, 
        species
    }})

    const allFavs = await Favorite.findAll()
    return res.status(200).json(allFavs)

} catch (error) {
    res.status(500).json({error:error.message})
}

}
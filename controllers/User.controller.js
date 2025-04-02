const {User, Dish} = require('../models');

module.exports.createOne = async (req, res, next) => {
    try {
        const {body} = req;
        const newUser = await User.create(body);
        res.status(201).send({data: newUser});
    } catch (error) {
        next(error)
    }
}

module.exports.getOne = async (req, res, next) => {
    try {
        const {params: {userId}} = req;
        const user = await User.findById(userId);
        res.status(200).send({data: user})
    } catch (error) {
        next(error)
    }
}

module.exports.getAll = async (req, res, next) => {
    try {
        const users = await User.find({});
        res.status(200).send({data: users})
    } catch (error) {
        next(error)
    }
}

module.exports.updateOne = async (req, res, next) => {
    try {
        const{params: {userId}, body} = req;
        const updatedUser = await User.findByIdAndUpdate(userId, body, { new: true }); 
        res.status(200).send({data: updatedUser})
    } catch (error) {
        next(error)
    }
}

module.exports.deleteOne = async (req, res, next) => {
    try {
        const {params: {userId}} = req;
        const deleted = await User.findByIdAndDelete(userId);
        res.status(200).send({data: deleted})
    } catch(error) {
        next(error)
    }
}

module.exports.getFavouriteDishes = async (req, res, next) => {
    try {
        const {params: {userId}} = req;
        const user = await User.findById(userId).populate('favouriteDishes');
        res.status(200).send({ data: user.favouriteDishes});
    } catch (error) {
        next(error)
    }
}

module.exports.addToFavouriteDishes = async (req, res, next) => {
    try {
        const {params: {userId, dishId}} = req;
        const user = await User.findById(userId);
        const dish = await Dish.findById(dishId);
       
        if (!user.favouriteDishes.includes(dishId)) {
            user.favouriteDishes.push(dishId);
            await user.save();
        }
        res.status(200).send({ data: user.favouriteDishes});
    } catch (error) {
        next(error)
    }
}

module.exports.removeFromFavouriteDishes = async (req, res, next) => {
    try {
        const {params: {userId, dishId}} = req;
        const user = await User.findById(userId);
        
        const index = user.favouriteDishes.indexOf(dishId);
        if (index === -1) {
            return res.status(404).send({ message: 'Dish not found in user favourites' });
        }
        user.favouriteDishes.splice(index, 1);
        await user.save();
        res.status(200).send({ data: user.favouriteDishes});
    } catch (error) {
        next(error)
    }
}
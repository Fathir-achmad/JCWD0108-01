const db = require('../models');
const category = db.Category

module.exports = {
    allCategory: async (req, res) => {
        try {
        const page = +req.query.page || 1;
        const limit = +req.query.limit || 10;
        const offset = (page - 1) * limit;
        const total = await category.count();
        const result = await category.findAll({
            attributes: [
                "id",
                "name"
            ],
            limit,
            offset: offset,
        });
        res.status(200).send({
            totalpage: Math.ceil(total / limit),
            currentpage: page,
            all_category: total,
            result,
            status: true
        });
        } catch (err) {
            console.log(err);
            res.status(404).send(err);
        }
    },
    createCategory : async (req, res) => {
        try {
            const { name } = req.body;
            const result = await category.findOrCreate({ where : { name } });
            if (!result[1]) throw {message : "Category has already been created"}
            res.status(201).send({
                msg: "Success to create new product",
                status: true,
            });
        } catch (err) {
            console.log(err);
            res.status(400).send(err);
        }
    },
    updateCategory: async (req, res) => {
        try {
            const { id } = req.params
            const { name } = req.body;
            await category.update({
                name
            },{where: { id }});
            res.status(200).send({
                msg: "Category has been updated successfully",
                status: true,
            });
        } catch (err) {
            console.log(err);
            res.status(400).send(err);
        }
    },
    deleteCategory : async(req, res) => {
        try {
            const { id } = req.params
            await product.update({ isDeleted: true },
                {where : { id }});
            res.status(200).send({
                msg: "Success deactivate the product",
                status: true,
            });
        } catch (err) {
            console.log(err);
            res.status(400).send(err);
        }
    },
}
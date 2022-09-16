module.exports = {
    getTodos: async (req, res) => {
        try {
            res.render('afterLogin.ejs')
        }catch(err) {
            console.log(err)
        }
}
}
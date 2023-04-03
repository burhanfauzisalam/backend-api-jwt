module.exports = (sequelize, Sequelize) => {
    const parents = sequelize.define("tb_parents", {
        p_name: {
            type: Sequelize.STRING
        },
        p_email: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        p_password: {
            type: Sequelize.STRING
        }
    })
    return parents
}
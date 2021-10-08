const modelBook = (sequelize, DataTypes) => {
    const Book = sequelize.define("Book", {
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      pageQuantity: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
    },
    {
    //   underscored: true,
      tableName: 'Books',
      timestamps: false, // Permite que os campos createdAt e updatedAt não sejam obrigatórios;
    });
  
    return Book;
  };
  
  module.exports = modelBook;
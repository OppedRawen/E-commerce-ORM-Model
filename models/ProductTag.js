// const { INTEGER } = require('sequelize');
const { Model, DataTypes } = require('sequelize');
// const { DatabaseError } = require('../../../01-Activities/06-Stu_Create-Read/Solved/config/connection');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id:{
      type: DataTypes.INTEGER,
      references:{
        model:"product",
        key:"id"
      }
    },
    tag_id:{
      type:DataTypes.INTEGER,
      references:{
        model:"tag",
        key:"id"
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;

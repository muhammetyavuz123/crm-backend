import Joi from "joi";

const ProductSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().min(3),
  price: Joi.string().required(),
  phone: Joi.string().required(),
  remainingDebt: Joi.string(),
  numberPlate: Joi.string(),
  photos: Joi.string(),
});

export default ProductSchema;

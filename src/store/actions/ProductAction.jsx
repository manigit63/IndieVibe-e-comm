import api from "../../api/Config";
import { loadproducts } from "../reducers/ProductSlice";

export const asyncLoadProduct = () => async (dispatch) => {
  try {
    const { data } = await api.get("/products");
    dispatch(loadproducts(data));
    // console.log("products loaded======>", data);
  } catch (error) {
    console.log(error);
  }
};

export const asyncUpdateProduct = (id, product) => async (dispatch) => {
  try {
    await api.patch(`/products/${id}`, product);
    dispatch(asyncLoadProduct());
    console.log("product Updated!!!");
  } catch (error) {
    console.log(error);
  }
};

export const asyncDeleteProduct = (id) => async (dispatch) => {
  try {
    await api.delete(`/products/${id}`);
    dispatch(asyncLoadProduct());
    console.log("product deleted Sucessfully!!");
  } catch (error) {
    console.log(error);
  }
};

export const asyncCreateProduct = (CreatedProduct) => async (dispatch) => {
  // console.log(CreatedProduct);

  try {
    await api.post("/products", CreatedProduct);
    dispatch(asyncLoadProduct());
    console.log("product created Sucessfully!!!");
  } catch (error) {
    console.log("Failed to create======> ", error);
  }
};

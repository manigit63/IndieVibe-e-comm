import api from "../../api/Config";
import { loginUser, logoutUser } from "../reducers/UserSlice";

export const asyncSignupUser = (formData) => async () => {
  try {
    await api.post("/users", formData);
    console.log("User registered!!!!");
  } catch (error) {
    console.log(error);
  }
};

export const asyncSigninUser = (formData) => async (dispatch) => {
  try {
    const { data } = await api.get(
      `/users?email=${formData.email}&password=${formData.password}`
    );
    // console.log("userdata++++++> ", data);
    if (data[0]) {
      localStorage.setItem("user", JSON.stringify(data[0]));
      dispatch(asyncCurrentUser());
      console.log("User logged in!");
    } else {
      console.log("Wrong Credientials!");
    }
  } catch (error) {
    console.log(error);
  }
};

export const asyncCurrentUser = () => (dispatch) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch(loginUser(user));
      console.log("session restored!!");
    } else {
      console.log("Signin to access resources!");
    }
  } catch (error) {
    console.log(error);
  }
};

export const asyncUpdateUser = (id, updatedData) => async (dispatch) => {
  // console.log("Updating user with ID:", id);
  // console.log("Updated data:", updatedData);
  try {
    const res = await api.patch(`/users/${id}`, updatedData);
    const updatedUser = res.data;
    localStorage.setItem("user", JSON.stringify(updatedUser));
    dispatch(asyncCurrentUser());
   
  } catch (error) {
   
    console.error("Failed to update user:", error);
  }
};

export const asyncLogoutUser = () => (dispatch) => {
  try {
    localStorage.removeItem("user");
    dispatch(logoutUser());
    console.log("User logged out!");
  } catch (error) {
    console.log(error);
  }
};
export const asyncDeleteUser = (id) => async (dispatch) => {
  try {
    await api.delete("/users/" + id);
    localStorage.removeItem("user");
    dispatch(logoutUser());
    console.log("User Deleted!");
  } catch (error) {
    console.log("failed to delete",error);
  }
};

export const asyncAddCartProducts = (product, user) => (dispatch) => {
  // const copyUser = { ...user };
  // console.log(copyUser);
  // copyUser.cart = [...user.cart];
  // console.log(copyUser);

  const copyUser = { ...user, cart: [...(user.cart || [])] };

  const productIndex = copyUser.cart.findIndex(
    (p) => p.product.id == product.id
  ); // true >index or false > -1
  // console.log(productIndex);

  if (productIndex == -1) {
    copyUser.cart.push({ product, quantity: 1 });
  } else {
    copyUser.cart[productIndex] = {
      product,
      quantity: copyUser.cart[productIndex].quantity + 1,
    };
  }

  dispatch(asyncUpdateUser(user.id, copyUser));
};


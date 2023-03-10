import axios from "axios";
import {
  ActivationParams,
  UpdateProductParams,
  AddProductParams,
  LoginParams,
  RegistrationParams,
} from "../../Interfaces/Interfaces";

// Product APIs

export function GetProducts() {
  const token = JSON.parse(localStorage.getItem("token") || "{}");
  return axios
    .get("https://keannu125.pythonanywhere.com/api/v1/products/", {
      headers: {
        Authorization: "Token " + token,
      },
    })
    .then((response) => {
      return response.data;
    });
}

export function GetProduct(id: number) {
  const token = JSON.parse(localStorage.getItem("token") || "{}");
  return axios
    .get("https://keannu125.pythonanywhere.com/api/v1/products/" + id + "/", {
      headers: {
        Authorization: "Token " + token,
      },
    })
    .then((response) => {
      return response.data;
    });
}

export function UpdateProduct(product: UpdateProductParams) {
  const token = JSON.parse(localStorage.getItem("token") || "{}");
  return axios
    .patch(
      "https://keannu125.pythonanywhere.com/api/v1/products/" +
        product.id +
        "/",
      product,
      {
        headers: {
          Authorization: "Token " + token,
        },
      }
    )
    .then((response) => {
      console.log("Product update successful", response.data);
      return response.data;
    })
    .catch((error) => {
      console.log("Error updating product", error.response);
      return error;
    });
}

export function GetLowestStockedProduct() {
  const token = JSON.parse(localStorage.getItem("token") || "{}");
  return axios
    .get("https://keannu125.pythonanywhere.com/api/v1/lowest_stock_product/", {
      headers: {
        Authorization: "Token " + token,
      },
    })
    .then((response) => {
      return response.data;
    });
}

export function GetLogs() {
  const token = JSON.parse(localStorage.getItem("token") || "{}");
  return axios
    .get("https://keannu125.pythonanywhere.com/api/v1/logs/", {
      headers: {
        Authorization: "Token " + token,
      },
    })
    .then((response) => {
      return response.data;
    });
}

export function AddProduct(note: AddProductParams) {
  const token = JSON.parse(localStorage.getItem("token") || "{}");
  return axios
    .post("https://keannu125.pythonanywhere.com/api/v1/products/", note, {
      headers: {
        Authorization: "Token " + token,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("Error adding product", error.response);
      return error;
    });
}

export function DeleteProduct(id: number) {
  const token = JSON.parse(localStorage.getItem("token") || "{}");
  return axios
    .delete(
      "https://keannu125.pythonanywhere.com/api/v1/products/" + id + "/",
      {
        headers: {
          Authorization: "Token " + token,
        },
      }
    )
    .catch((error) => {
      console.log("Error deleting product", error.response);
      return error;
    });
}

// User APIs

export function UserRegister(register: RegistrationParams) {
  return axios
    .post(
      "https://keannu125.pythonanywhere.com/api/v1/accounts/users/",
      register
    )
    .then(async (response) => {
      console.log(response.data);
      return true;
    })
    .catch((error) => {
      console.log("Registration failed: " + error.response);
      return false;
    });
}

export function UserLogin(user: LoginParams) {
  return axios
    .post(
      "https://keannu125.pythonanywhere.com/api/v1/accounts/token/login/",
      user
    )
    .then(async (response) => {
      localStorage.setItem("token", JSON.stringify(response.data.auth_token));
      console.log(
        "Login Success! Stored Token: ",
        JSON.parse(localStorage.getItem("token") || "{}")
      );
      return true;
    })
    .catch((error) => {
      console.log("Login Failed: " + error.response);
      return false;
    });
}

export function UserInfo() {
  const token = JSON.parse(localStorage.getItem("token") || "{}");
  return axios
    .get("https://keannu125.pythonanywhere.com/api/v1/accounts/users/me/", {
      headers: {
        Authorization: "Token " + token,
      },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log("Error retrieving user data", error.response);
      return false;
    });
}

export function QueryUser(id: number) {
  const token = JSON.parse(localStorage.getItem("token") || "{}");
  return axios
    .get("https://keannu125.pythonanywhere.com/api/v1/user_list/" + id, {
      headers: {
        Authorization: "Token " + token,
      },
    })
    .then((response) => {
      console.log("Querying one user...", response.data);
      return response.data;
    })
    .catch((error) => {
      console.log("Error retrieving single user data", error.response);
      return false;
    });
}

export function UserActivate(activation: ActivationParams) {
  return axios
    .post(
      "https://keannu125.pythonanywhere.com/api/v1/accounts/users/activation/",
      activation
    )
    .then(async (response) => {
      console.log("Activation Success");
      return true;
    })
    .catch((error) => {
      console.log("Activation failed: " + error.response);
      return false;
    });
}

export async function CheckSavedSession() {
  console.log("Checking for saved session by querying user data");
  if (JSON.parse(localStorage.getItem("token") || "{}")) {
    if (await UserInfo()) {
      console.log("Previous session found");
      return true;
    } else {
      console.log("Previous session found but expired. Clearing token");
      localStorage.removeItem("token");
      return false;
    }
  }
  console.log("No previous session found");
  return false;
}

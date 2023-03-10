import axios from "axios";
import {
  ActivationParams,
  UpdateProductParams,
  AddProductParams,
  LoginParams,
  RegistrationParams,
} from "../../Interfaces/Interfaces";

// Product APIs
// Local Testing "http://localhost:8000"
// Remote Deploy "https://keannu125.pythonanywhere.com"
axios.defaults.baseURL = "https://keannu125.pythonanywhere.com";
const token = JSON.parse(localStorage.getItem("token") || "{}");
export function GetProducts() {
  return axios
    .get("/api/v1/products/", {
      headers: {
        Authorization: "Token " + token,
      },
    })
    .then((response) => {
      console.log("Queried products successfully");
      return response.data;
    })
    .catch((error) => {
      console.log("Error querying products");
      return error;
    });
}

export function GetProduct(id: number) {
  return axios
    .get("/api/v1/products/" + id + "/", {
      headers: {
        Authorization: "Token " + token,
      },
    })
    .then((response) => {
      console.log("Queried product successfully");
      return response.data;
    })
    .catch((error) => {
      console.log("Error querying product");
      return error;
    });
}

export function UpdateProduct(product: UpdateProductParams) {
  return axios
    .patch("/api/v1/products/" + product.id + "/", product, {
      headers: {
        Authorization: "Token " + token,
      },
    })
    .then((response) => {
      console.log("Product update successful");
      return response.data;
    })
    .catch((error) => {
      console.log("Error updating product");
      return error;
    });
}

export function GetLowestStockedProduct() {
  return axios
    .get("/api/v1/lowest_stock_product/", {
      headers: {
        Authorization: "Token " + token,
      },
    })
    .then((response) => {
      console.log("Queried lowest stocekd product successfully");
      return response.data;
    })
    .catch((error) => {
      console.log("Error querying lowest stocked product");
    });
}

export function GetLogs() {
  return axios
    .get("/api/v1/logs/", {
      headers: {
        Authorization: "Token " + token,
      },
    })
    .then((response) => {
      console.log("Queried logs successfully");
      return response.data;
    })
    .catch((error) => {
      console.log("Error querying logs");
      return error;
    });
}

export function AddProduct(note: AddProductParams) {
  return axios
    .post("/api/v1/products/", note, {
      headers: {
        Authorization: "Token " + token,
      },
    })
    .then((response) => {
      console.log("Added product successfully");
      return response.data;
    })
    .catch((error) => {
      console.log("Error adding product");
      return error;
    });
}

export function DeleteProduct(id: number) {
  return axios
    .delete("/api/v1/products/" + id + "/", {
      headers: {
        Authorization: "Token " + token,
      },
    })
    .then((response) => {
      console.log("Deleted product successfully");
      return response;
    })
    .catch((error) => {
      console.log("Error deleting product");
      return error;
    });
}

// User APIs

export function UserRegister(register: RegistrationParams) {
  return axios
    .post("/api/v1/accounts/users/", register)
    .then(async (response) => {
      console.log("Registration success");
      return true;
    })
    .catch((error) => {
      console.log("Registration failed");
      return false;
    });
}

export function UserLogin(user: LoginParams) {
  return axios
    .post("/api/v1/accounts/token/login/", user)
    .then(async (response) => {
      localStorage.setItem("token", JSON.stringify(response.data.auth_token));
      console.log("Login Success!");
      return true;
    })
    .catch((error) => {
      console.log("Login Failed");
      return false;
    });
}

export function UserInfo() {
  return axios
    .get("/api/v1/accounts/users/me/", {
      headers: {
        Authorization: "Token " + token,
      },
    })
    .then((response) => {
      console.log("Success querying self info");
      return response.data;
    })
    .catch((error) => {
      console.log("Error querying self info");
      return false;
    });
}

export function QueryUser(id: number) {
  return axios
    .get("/api/v1/user_list/" + id, {
      headers: {
        Authorization: "Token " + token,
      },
    })
    .then((response) => {
      console.log("Success querying user");
      return response.data;
    })
    .catch((error) => {
      console.log("Error querying user");
      return false;
    });
}

export function UserActivate(activation: ActivationParams) {
  return axios
    .post("/api/v1/accounts/users/activation/", activation)
    .then(async (response) => {
      console.log("Activation Success");
      return true;
    })
    .catch((error) => {
      console.log("Activation failed");
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

import axios from "axios";
import { API_URL } from "./consts";

function buildDataRequest(data) {
  var reqData = "";
  for (var prop in data) {
    reqData = reqData + "&" + prop + "=" + data[prop];
  }
  return reqData.substr(1);
}

export const apiCallService = (url = "", token = "", method = "", inpobj) => {
  const data =
    method === "POST" ? buildDataRequest(inpobj) : JSON.stringify(inpobj);
  const header =
    method === "POST"
      ? (() => ({ "content-type": "application/json; charset=utf-8" }))()
      : (() => ({
          "content-type": "application/json",
          Authorization: `bearer ${token}`,
        }))();

  let baseURL = API_URL + url;

  return new Promise((resolve, reject) => {
    let axiosInp = {
      method: method,
      url: baseURL,
      data: data,
      headers: header,
    };
    axios(axiosInp)
      .then((resp) => {
        resolve(resp);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const apiCallServiceLogin = (url = "", method = "", inpobj) => {
  const data =
    method === "POST" ? buildDataRequest(inpobj) : JSON.stringify(inpobj);
  const header =
    method === "POST"
      ? (() => ({ "content-type": "application/json; charset=utf-8" }))()
      : (() => ({ "content-type": "application/json" }))();

  let baseURL = API_URL + url;

  return new Promise((resolve, reject) => {
    let axiosInp = {
      method: method,
      url: baseURL,
      data: data,
      headers: header,
    };
    axios(axiosInp)
      .then((resp) => {
        resolve(resp);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

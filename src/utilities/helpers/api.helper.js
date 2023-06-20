import { message } from "antd";
import { apiCallService, apiCallServiceLogin } from "../apis/Service";
export const setStateByApiCall = async (
  url,
  token = "",
  method,
  data,
  setState,
  onfinally = () => {}
) => {
  return await apiCallService(url, token, method, data, "")
    .then(async (res) => {
      setState((await res.data?.length) ? await res.data : []);
      return (await res.data?.length) ? await res.data : [];
    })
    .catch((error) => {
      error.response.status >= 400
        ? message.error(error.response.data.message)
        : message.error(error.message);
    })
    .finally(() => onfinally());
};

export const getUrlWithParams = (url, inpobj = {}) => {
  const keyValues = Object.entries(inpobj);
  const params = keyValues.map(([key, value]) => `${key}=${value}`).join("&");
  return `${url}?${params}`;
};

export const loginApi = (
  url,
  inpobj,
  callBack = () => {},
  onfinally = () => {}
) => {
  apiCallServiceLogin(url, "post", inpobj)
    .then((res) => {
      if (res?.data) {
        callBack(res.data);
      }
    })
    .catch((error) => {
      console.log(error.response);
      return error.response.status >= 400
        ? message.error(error.response.data.message)
        : message.error(error.message);
    })
    .finally(() => {
      onfinally();
    });
};

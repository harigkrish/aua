export const encodeUserAuthToken = (username = "", password = "") =>
  window.btoa(`${username}:${password}`, "base64");

export const decodeUserAuthToken = (buffer = "") => window.atob(buffer);

// const parseJwt = (token) => {
//   try {
//     return JSON.parse(atob(token.split(".")[1]));
//   } catch (e) {
//     return null;
//   }
// };

export const authVerify = (token, logout, timeout = 5000) => {
  console.log("ss", token);
  if (token) {
    const decodedJwt = parseJwt(token);
    console.log(decodedJwt?.exp * timeout,"jwt");
    setTimeout(() => {
      logout();
    }, decodedJwt?.exp * timeout - Date.now());

    return;
  }
};

export const parseJwt = (token) => {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  console.log(base64,"base64")
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

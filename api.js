export const OTp = (data, callback) => {
  fetch(`https://goldenbeauty.herokuapp.com/v1/otp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token : localStorage.getItem('blog_token')
    },
    body: JSON.stringify(data),
  })
    .then((resp) => resp.json())
    .then((result) => callback(null, result))
    .catch((err) => callback(err, null));
};


export const Signup = (data, callback) => {
  fetch(`https://goldenbeauty.herokuapp.com/v1/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((resp) => resp.json())
    .then((result) => callback(null, result))
    .catch((err) => callback(err, null));
};


export const LOgin = (data, callback) => {
  fetch(`https://goldenbeauty.herokuapp.com/v1/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((resp) => resp.json())
    .then((result) => callback(null, result))
    .catch((err) => callback(err, null));
};
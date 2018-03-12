import request from 'superagent';

export function doGetRequest(url) {
  console.log('Doing an get request');
  return new Promise((resolve, reject) =>
    request
      .get(url)
      .accept('application/json')
      .type('application/json')
      .set('Authorization', '1234')
      .end((err, res) => {
        if (res && res.text) {
          resolve(JSON.parse(res.text));
        } else {
          console.log('error');
          reject('Fetch error');
        }
      }),
    );
}

export function doPostRequest(url, params) {
  return new Promise((resolve, reject) =>
   request
    .post(url)
    .send(params)
    .accept('application/json')
    .type('application/json')
    .end((err, res) => {
      if (res && res.status && res.status === 200) {
        resolve(true);
      } else {
        reject('Error saving');
      }
    }),
  );
}

export function doPostUpdate(url, params) {
  return new Promise((resolve, reject) =>
   request
    .put(url)
    .send(params)
    .accept('application/json')
    .type('application/json')
    .end((err, res) => {
      if (res && res.status && res.status === 200) {
        resolve(true);
      } else {
        reject('Error updating');
      }
    }),
  );
}

export function doDelete(url, params) {
  return new Promise((resolve, reject) =>
   request
    .delete(url)
    .send(params)
    .accept('application/json')
    .type('application/json')
    .end((err, res) => {
      if (res && res.status && res.status === 200) {
        resolve(true);
      } else {
        reject('Error deleting');
      }
    }),
  );
}


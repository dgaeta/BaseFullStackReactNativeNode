/**
 * Fires up the web server.
 */

import App from './src/App';

const app = new App().express;
const port = process.env.PORT || 3000;

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  return console.log(`server is listening on ${port}`);
})


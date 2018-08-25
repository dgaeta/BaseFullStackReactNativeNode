// app.js

import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import * as passport from 'passport';

import { PassportSetup } from './PassportSetup';
import { DbConfig } from './db';
import { userRouter } from './routes/userRouter';

export default class App {
  public express;

  constructor() {
    // connect to the mongodb
    mongoose.connect(DbConfig.local, { useNewUrlParser: true }).then(
      () => { console.log('Database is connected') },
      err => { console.log(`Can not connect to database: ${err}`) }
    );

    this.express = express();

    this.express.use(passport.initialize());
    PassportSetup(passport);

    const urlOptions: bodyParser.OptionsUrlencoded =
    this.express.use(bodyParser.urlencoded( {encoded: false} as any));
    this.express.use(bodyParser.json());
    this.mountRoutes();
  }

  private mountRoutes(): void {
    const router = express.Router();

    router.get('/', (req, res) => {
      res.json({
        message: 'Hello World!'
      });
    });
    this.express.use('/', router);

    this.express.use('/api/users', userRouter)
  }
}

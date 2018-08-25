
import {ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';
import * as mongoose from 'mongoose';

import User from './models/User';

/**
 * Object liternal containing options to control how the token is extracted
 * from the request once verified.
 */
const opts: StrategyOptions = {
  'jwtFromRequest': ExtractJwt.fromAuthHeaderAsBearerToken(),
  'secretOrKey': 'secret'
} 

export function PassportSetup(passport): void {
  passport.use(new Strategy(opts, (jwt_payload, done) => {
    User.findById(jwt_payload.id)
      .then(user => {
        if(user) {
            return done(null, user);
        }
        return done(null, false);
      })
      .catch(err => console.error(err));
  }));
}
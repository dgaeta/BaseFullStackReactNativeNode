import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import * as gravatar from 'gravatar';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

import * as passport from 'passport';
import validateRegisterInput from '../validation/register';
import validateLoginInput from '../validation/login';

import User, { UserSchema } from '../models/User';

export const userRouter = express.Router();

userRouter.post('/register', _registerCallBack);
userRouter.post('/login', _loginCallback);
userRouter.get('/me', passport.authenticate('jwt', { session: false}), _meCallback);

function _registerCallBack(req, res): void {
  console.log(req.body);
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const conditions: any = {email: req.body.email};
  User.findOne(conditions).then((user: mongoose.Document) => {
    if (user) { // Scenario A: user already exists
      return res.status(400).json({
        email: 'email already exists'
      });
    } else { // Scenario B: user doesn't exist, create new one.

      const newUser: any = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err: Error, salt: string) => {
        if (err) {
          console.error(`Error generating salt: ${err}`);
        } else {
          bcrypt.hash(newUser.password, salt, (err: Error, hash: string) => {
            if (err) {
              console.error(`Error hashing: ${err}`);
            } else {
              newUser.password = hash;
              newUser.save().then(user =>{
                res.json(user);
              })
            }
          })
        }
      })
    }
  })
}

function _loginCallback(req, res): void {

  const { errors, isValid } = validateLoginInput(req.body);

  if(!isValid) {
      return res.status(400).json(errors);
  }

  const email: string = req.body.email;
  const password: string = req.body.password;

  User.findOne({email}).then(
    (user: any) => {
    if (!user) {
        errors.email = 'User not found'
        return res.status(404).json(errors);
    } else {
      bcrypt.compare(password, user.password).then((isMatch: boolean) => {
        if(isMatch) {
            const payload = {
                id: user.id,
                name: user.name,
                avatar: user.avatar
            }
            jwt.sign(
              payload,
              'secret',
              {expiresIn: 3600},
              (err, token) => {
                if(err) console.error('There is some error in token', err);
                else {
                    res.json({
                        success: true,
                        token: `Bearer ${token}`
                    });
                }
              }
            );
          } else {
            errors.password = 'Incorrect Password';
            return res.status(400).json(errors);
          }
        }
      );
    }
  });
}

function _meCallback(req, res): void {
  return res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email
  })
}


import React, { useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

/* Components */
import JournalScreen from '../components/journal/JournalScreen';
import AuthRouter from './AuthRouter';
import { firebase } from '../firebase/firebase-config';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import Loader from '../components/utils/Loader';

function AppRouter() {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoogedIn, setIsLoogedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoogedIn(true);
      } else {
        setIsLoogedIn(false);
      }

      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoogedIn]);

  if (checking) {
    return <Loader />;
  }

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/auth" component={AuthRouter} />

          <Route exact path="/" component={JournalScreen} />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;

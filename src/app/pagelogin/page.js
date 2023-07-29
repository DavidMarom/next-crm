'use client'
import React from 'react'
import { Gbtn, Button } from './Login.styles'
import { gprovider } from '../../../firebase-config'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { PageContainer } from '@/components';
import { Row } from '@/components';
import useCounterStore from '../../store/counter';

const Page01 = () => {

  const user = useCounterStore((state) => state.user);
  const setUser = useCounterStore((state) => state.setUser);
  const logoutUser = useCounterStore((state) => state.decrement);

  async function doSignup() {
    const auth = getAuth();
    signInWithPopup(auth, gprovider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        let usr = {
          name: user.displayName,
          mail: user.email,
          photoURL: user.photoURL,
          uid: user.uid,
          token: token
        }
        setUser(usr);

      }).catch((error) => {
        console.log(error);
      });
  }

  const doSignOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      logoutUser();

    }).catch((error) => {
      console.log(error);
    });
  }

  typeof window !== 'undefined' && console.log('------', user);
  return (
    <PageContainer>
      <h1>Login</h1>

      {user ?
        <Button onClick={doSignOut}>Logout</Button> :
        <Button onClick={doSignup}>Login</Button>
      }
      {user ?
        <div>
          <p>Logged in as:</p>
          <p>{user.name}</p>
          <p>{user.mail}</p>
        </div>
        :
        null}

    </PageContainer>
  );
}

export default Page01;

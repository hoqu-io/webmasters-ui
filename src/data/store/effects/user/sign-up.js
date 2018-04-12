/* global localStorage */

import { call, put } from 'redux-saga/effects'
import JSEncrypt from 'jsencrypt'

import { signUp } from 'api/users/auth'

export default function * ({ payload: { account, user } }) {
  const { privateKey, publicKey } = yield generate()
  localStorage.setItem('private', privateKey)
  localStorage.setItem('public', publicKey)

  yield call(signUp, { pubKey: publicKey })

  yield put({ type: '*USER.AUTH', payload: { } })
  yield put({ type: '*USER.CHECK', payload: { hookType: 'start' } })
}

const generate = () => (new Promise((resolve) => {
  const crypt = new JSEncrypt({ default_key_size: 512 })
  crypt.getKey(() => (resolve({
    privateKey: crypt.getPrivateKey()
      .replace('-----BEGIN RSA PRIVATE KEY-----\n', '')
      .replace('\n-----END RSA PRIVATE KEY-----', ''),
    publicKey: crypt.getPublicKey()
      .replace('-----BEGIN PUBLIC KEY-----\n', '')
      .replace('\n-----END PUBLIC KEY-----', '')
  })))
}))

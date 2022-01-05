import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
} from 'firebase/auth'
import { auth } from 'src/lib/firebase'
import { parseFirebaseError } from 'src/lib/utils'

interface AuthPayload {
  email: string
  password: string
}

class AuthFactory {
  static async createUser({
    email,
    password,
  }: AuthPayload): Promise<User | void> {
    try {
      const data = await createUserWithEmailAndPassword(auth, email, password)

      return data.user
    } catch (err) {
      const error = parseFirebaseError(err as Error)

      throw new Error(error)
    }
  }

  static async signInUser({
    email,
    password,
  }: AuthPayload): Promise<User | void> {
    try {
      const data = await signInWithEmailAndPassword(auth, email, password)

      return data.user
    } catch (err) {
      const error = parseFirebaseError(err as Error)

      throw new Error(error)
    }
  }
}

export default AuthFactory

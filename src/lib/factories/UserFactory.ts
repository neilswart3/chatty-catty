import { doc, setDoc } from 'firebase/firestore'
import { db } from 'src/lib/firebase'
import { AuthUser } from 'src/store/auth/types'
import { parseFirebaseError } from '../utils'

class UserFactory {
  static async createUser({
    uid,
    displayName,
    email,
    photoUrl,
  }: AuthUser): Promise<void | Error> {
    try {
      const docRef = doc(db, 'users', uid)
      await setDoc(docRef, { uid, displayName, email, photoUrl })
    } catch (err) {
      const error = parseFirebaseError(err as Error)

      throw new Error(error)
    }
  }
}

export default UserFactory

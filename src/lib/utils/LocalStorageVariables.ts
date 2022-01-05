import { User } from 'firebase/auth'
import sign from 'jwt-encode'
import decode from 'jwt-decode'

class LocalStorageVariables {
  private static userVar: string = 'chcau'
  private static secret: string = process.env.REACT_APP_JWT_SECRET!

  static setUser(user: User): void {
    const encoded = sign(user, this.secret)

    globalThis.localStorage.setItem(this.userVar, encoded)
  }

  static getUser(): User | null {
    const userEncoded = globalThis.localStorage.getItem(this.userVar) || ''

    if (!userEncoded) return null

    return decode(userEncoded) as User
  }
}

export default LocalStorageVariables

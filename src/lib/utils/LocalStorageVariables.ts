import sign from 'jwt-encode'
import decode from 'jwt-decode'
import { AuthUser } from 'src/store/auth/types'

class LocalStorageVariables {
  private static userVar: string = 'chcau'
  private static secret: string = process.env.REACT_APP_JWT_SECRET!

  static setUser(user: AuthUser): void {
    const encoded = sign(user, this.secret)

    globalThis.localStorage.setItem(this.userVar, encoded)
  }

  static getUser(): AuthUser | null {
    const userEncoded = globalThis.localStorage.getItem(this.userVar) || ''

    if (!userEncoded) return null

    return decode(userEncoded) as AuthUser
  }

  static removeUser(): void {
    globalThis.localStorage.removeItem(this.userVar)
  }
}

export default LocalStorageVariables

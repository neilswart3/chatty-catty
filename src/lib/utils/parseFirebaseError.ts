type ErrorMessageMap = {
  [key: string]: string
}

const errorMessage: ErrorMessageMap = {
  'auth/email-already-in-use': 'This email is already in use.',
  'auth/wrong-password': 'The password is incorrect.',
  'auth/user-not-found': 'This user was not found.',
  'auth/invalid-email': 'Please enter a valid email.',
}

const parseFirebaseError = (err: Error): string => {
  const { code } = JSON.parse(JSON.stringify(err))

  return errorMessage[code]
}

export default parseFirebaseError

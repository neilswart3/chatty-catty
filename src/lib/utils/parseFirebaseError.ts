type ErrorMessageMap = {
  [key: string]: string
}

const errorMessage: ErrorMessageMap = {
  'auth/email-already-in-use': 'This email is already in use.',
  'auth/wrong-password': 'The password is incorrect.',
  'auth/user-not-found': 'This user was not found.',
  'auth/invalid-email': 'Please enter a valid email.',
  'auth/network-request-failed':
    'Request has failed, please check your connection.',
  'permission-denied': 'You are not allowed to perform this action.',
}

const parseFirebaseError = (err: Error): string => {
  const { code } = JSON.parse(JSON.stringify(err))

  console.log('errorParsed:', JSON.parse(JSON.stringify(err)))
  console.log('code:', code)

  return errorMessage[code] || 'An error has occurred, please try again later.'
}

export default parseFirebaseError

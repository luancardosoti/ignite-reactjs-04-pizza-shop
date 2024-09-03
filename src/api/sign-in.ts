import { api } from '@/lib/axios'

export type SignInBody = {
  email: string
}

export async function signIn({ email }: SignInBody) {
  api.post('/authenticate', { email })
}

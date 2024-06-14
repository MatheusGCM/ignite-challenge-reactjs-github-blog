import { isAxiosError } from 'axios'

import { api } from '../lib/axios'

import { UserResponse } from '@/@types/user'

export async function getUser(username: string) {
  try {
    const { data } = await api.get<UserResponse>(`/users/${username}`)

    const userData = {
      ...data,
      avatarUrl: data.avatar_url,
      htmlUrl: data.html_url,
    }

    return { userData }
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.code === '404') {
        return { userData: null }
      }
    }
  }
}

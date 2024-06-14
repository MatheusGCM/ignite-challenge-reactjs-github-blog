import { useState } from 'react'

import { UserDataProps } from '@/@types/user'
import { getUser } from '@/api/get-user'

export function useUserData() {
  const [userData, setUserData] = useState<UserDataProps | null>(() => {
    const storedValue = localStorage.getItem('@user-data:github-blog')
    return storedValue ? JSON.parse(storedValue) : null
  })

  async function fetchUserData(username: string) {
    const response = await getUser(username)

    if (response?.userData) {
      localStorage.setItem(
        '@user-data:github-blog',
        JSON.stringify(response.userData),
      )
      setUserData(response.userData)

      return
    }

    return console.error('User not found')
  }

  return { userData, fetchUserData }
}

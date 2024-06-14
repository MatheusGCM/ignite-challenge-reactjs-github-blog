export interface UserResponse {
  id: number
  name: string
  avatar_url: string
  html_url: string
  bio: string
  login: string
  company: string
  followers: number
  location: string
}

interface UserDataProps extends Omit<UserResponse, 'avatar_url' | 'html_url'> {
  avatarUrl: string
  htmlUrl: string
}

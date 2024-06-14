import { memo } from 'react'

import { UserDataProps } from '@/@types/user'
import { Flag, Link } from '@/components'
import { faGithub, faBuilding, faUserGroup, faLocationDot } from '@/utils/icons'

interface UserProfileProps {
  userData: UserDataProps | null
}

function UserProfileComponent({ userData }: UserProfileProps) {
  // TODO: add loading state
  if (!userData) {
    return <h1>CARREGANDO...</h1>
  }

  const {
    avatarUrl,
    name,
    bio,
    htmlUrl,
    login,
    company,
    followers = 0,
    location,
  } = userData

  return (
    <div className="flex h-[13.25rem] w-full gap-8 rounded-[0.625rem] bg-base-profile p-8">
      <img src={avatarUrl} alt="" className="size-[9.25rem]" />
      <div className="w-full">
        <div className="mb-2 flex justify-between">
          <h1 className="text-2xl font-bold text-base-title">{name}</h1>
          <Link label="github" url={htmlUrl} />
        </div>
        <p className="mb-6">{bio}</p>
        <div className="flex gap-6">
          <Flag icon={faGithub} text={login} />
          <Flag
            icon={company ? faBuilding : faLocationDot}
            text={company || location}
          />
          <Flag
            icon={faUserGroup}
            text={`${followers} ${followers > 1 ? 'seguidores' : 'seguidor'}`}
          />
        </div>
      </div>
    </div>
  )
}

export const UserProfile = memo(UserProfileComponent)

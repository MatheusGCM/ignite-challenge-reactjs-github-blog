import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useNavigate } from 'react-router-dom'

import { Flag } from '../Flag'
import { Link } from '../Link'

import { IssueProps } from '@/@types/issues'
import {
  faComment,
  faCalendarDay,
  faChevronLeft,
  faGithub,
} from '@/utils/icons'

export function IssueInfo({
  title,
  user,
  createdAt,
  comments,
  htmlUrl,
}: IssueProps) {
  const navigate = useNavigate()
  const time =
    createdAt &&
    formatDistanceToNow(new Date(createdAt), {
      addSuffix: true,
      locale: ptBR,
    })

  function goBack() {
    navigate('/')
  }

  return (
    <div className="flex h-[10.5rem] w-full flex-col rounded-[0.625rem] bg-base-profile p-8">
      <div className="mb-5 flex items-center justify-between">
        <button onClick={goBack}>
          <div className="flex items-center gap-2 text-blue">
            <FontAwesomeIcon icon={faChevronLeft} className="size-3" />
            <span className="text-xs font-bold uppercase">voltar</span>
          </div>
        </button>
        <Link label="ver no github" url={htmlUrl} />
      </div>
      <h1 className="mb-2 text-2xl font-bold text-base-title">{title}</h1>
      <div className="flex gap-6">
        <Flag icon={faGithub} text={user?.login} colorText="text-base-span" />
        <Flag icon={faCalendarDay} text={time} colorText="text-base-span" />
        <Flag
          icon={faComment}
          text={`${comments > 1 ? `${comments} comentários` : `${comments} comentário`}`}
          colorText="text-base-span"
        />
      </div>
    </div>
  )
}

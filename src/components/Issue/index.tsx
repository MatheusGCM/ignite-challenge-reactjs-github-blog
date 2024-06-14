import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import Markdown from 'react-markdown'

interface IssueProps {
  title: string
  createdAt: string
  body: string
}

export function Issue({ title, createdAt, body }: IssueProps) {
  const time = formatDistanceToNow(new Date(createdAt), {
    addSuffix: true,
    locale: ptBR,
  })
  return (
    <>
      <div className="flex w-full justify-between gap-2">
        <h1 className="text-xl font-bold text-base-title">{title}</h1>
        <span className="text-sm text-base-span">{time}</span>
      </div>
      <div className="line-clamp-4 w-full">
        <Markdown>{body}</Markdown>
      </div>
    </>
  )
}

import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface LinkProps {
  label: string
  url: string
}

export function Link({ label, url }: LinkProps) {
  return (
    <a
      className="flex cursor-pointer gap-2 self-start border-b-[1px] border-transparent text-blue hover:border-b-[1px] hover:border-blue"
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <span className="text-xs font-bold uppercase">{label}</span>
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="size-3" />
    </a>
  )
}

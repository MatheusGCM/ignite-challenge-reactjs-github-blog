import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface FlagProps {
  icon: IconDefinition
  text: string
  colorText?: string
}

export function Flag({ icon, text, colorText }: FlagProps) {
  if (!text) {
    return
  }
  return (
    <div className="flex items-center gap-2">
      <FontAwesomeIcon icon={icon} className="text-base-label" />
      <span className={colorText}>{text}</span>
    </div>
  )
}

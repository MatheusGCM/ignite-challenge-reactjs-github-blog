import Markdown from 'react-markdown'
import { useParams, useLocation } from 'react-router-dom'

import { IssueProps } from '@/@types/issues'
import { IssueInfo } from '@/components'

export function IssueDetails() {
  const { issueNumber } = useParams()
  const location = useLocation()
  const repoIssues = location.state as IssueProps[]

  const issueDetails = repoIssues?.find(
    (item) => String(item.number) === issueNumber,
  )

  if (!issueDetails) {
    return
  }

  return (
    <div className="flex w-full flex-col">
      <IssueInfo {...issueDetails} />
      <span className="mt-10">
        <Markdown>{issueDetails.body}</Markdown>
      </span>
    </div>
  )
}

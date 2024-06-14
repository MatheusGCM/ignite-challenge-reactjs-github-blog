import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { IssueProps } from '@/@types/issues'
import { PathParams, getRepoIssues } from '@/api/get-repo-issues'

export function useRepoIssues() {
  const [repoIssues, setRepoIssues] = useState<IssueProps[] | null>()
  const navigate = useNavigate()

  async function fetchRepoIssues({ username, repo }: PathParams) {
    const response = await getRepoIssues({ username, repo })

    if (response?.repoIssues) {
      setRepoIssues(response.repoIssues)
      return
    }

    return console.error('Issues not found')
  }

  function handleNavigateIssueDetails(number: string) {
    navigate(`issue/${number}`, { state: repoIssues })
  }

  return { repoIssues, fetchRepoIssues, handleNavigateIssueDetails }
}

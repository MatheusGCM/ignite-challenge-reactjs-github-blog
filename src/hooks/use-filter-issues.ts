import { ChangeEvent, useEffect, useState } from 'react'

import { useDebounce } from './use-debounce'

import { IssueProps } from '@/@types/issues'
import { getFilteredIssues } from '@/api/get-filtered-issues'

export function useFilterIssues(username: string, repo: string) {
  const [filteredIssues, setFilteredIssues] = useState<IssueProps[]>()
  const [searchIssues, setSearchIssues] = useState('')
  const debouncedSearchIssues = useDebounce(searchIssues, 1000)

  function handleIssuesSearch(event: ChangeEvent<HTMLInputElement>) {
    setSearchIssues(event.target.value)
  }

  async function fetchFilteredIssues() {
    const response = await getFilteredIssues({
      repo,
      search: debouncedSearchIssues,
      username,
    })

    if (response?.filteredIssues) {
      setFilteredIssues(response.filteredIssues)
      return
    }

    return console.error('Search error')
  }

  useEffect(() => {
    if (debouncedSearchIssues) {
      fetchFilteredIssues()
    }
  }, [debouncedSearchIssues])

  return {
    searchIssues,
    debouncedSearchIssues,
    filteredIssues,
    handleIssuesSearch,
  }
}

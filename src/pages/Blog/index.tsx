import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'

import { Issue, UserProfile } from '@/components'
import { useUserData, useRepoIssues } from '@/hooks'
import { useFilterIssues } from '@/hooks/use-filter-issues'
import { faSpinner } from '@/utils/icons'

export function Blog() {
  const username = 'rocketseat-education'
  const repo = 'reactjs-github-blog-challenge'

  const { userData, fetchUserData } = useUserData()
  const { repoIssues, fetchRepoIssues, handleNavigateIssueDetails } =
    useRepoIssues()
  const {
    searchIssues,
    debouncedSearchIssues,
    filteredIssues,
    handleIssuesSearch,
  } = useFilterIssues(username, repo)

  const filteredData =
    debouncedSearchIssues !== '' ? filteredIssues : repoIssues
  console.log(filteredData)
  const isLoadingSearch = searchIssues !== '' && debouncedSearchIssues === ''

  useEffect(() => {
    if (!userData) {
      fetchUserData('MatheusGCM')
    }
    fetchRepoIssues({
      username,
      repo,
    })
  }, [])

  return (
    <div className="flex w-full flex-col">
      <UserProfile userData={userData} />
      <div className="mb-12 mt-[4.5rem] flex flex-col gap-3">
        <div className="flex justify-between">
          <h1 className="text-lg font-bold text-base-subtitle">Publicações</h1>
          <span className="text-sm text-base-span">{`${filteredData && filteredData.length > 0 ? `${filteredData?.length} publicações` : ''} `}</span>
        </div>
        <form>
          <div className="flex w-full flex-row items-center rounded-md border border-base-border bg-base-input px-4 py-3 focus-within:border-blue">
            <input
              value={searchIssues}
              type="text"
              placeholder="Buscar conteúdo"
              className="w-full bg-transparent outline-none placeholder:text-base-label"
              onChange={handleIssuesSearch}
            />
            {isLoadingSearch && (
              <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
            )}
          </div>
        </form>
      </div>
      <div className="grid grid-cols-2 gap-8">
        {filteredData?.map((item) => {
          return (
            <button
              key={`${item.number}`}
              className="flex h-[16rem] w-[26rem] cursor-pointer flex-col gap-5 rounded-[0.625rem] border border-base-post bg-base-post p-8 text-left outline-none hover:border hover:border-base-label"
              onClick={() => handleNavigateIssueDetails(`${item.number}`)}
            >
              <Issue {...item} />
            </button>
          )
        })}
      </div>
    </div>
  )
}

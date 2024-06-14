import { isAxiosError } from 'axios'

import { ResponseFilteredIssues } from '@/@types/issues'
import { api } from '@/lib/axios'

interface FilterParams {
  search: string
  username: string
  repo: string
}

export async function getFilteredIssues({
  repo,
  search,
  username,
}: FilterParams) {
  try {
    const { data } = await api.get<ResponseFilteredIssues>(
      `/search/issues?q=${search} repo:${username}/${repo}`,
    )

    const filteredIssues = data.items.map((item) => {
      return { ...item, createdAt: item.created_at, htmlUrl: item.html_url }
    })

    return { filteredIssues }
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.code === '404') {
        return { filteredIssues: null }
      }
    }
  }
}

import { isAxiosError } from 'axios'

import { ResponseIssueProps } from '@/@types/issues'
import { api } from '@/lib/axios'

export interface PathParams {
  username: string
  repo: string
  number?: string
}

export async function getRepoIssues({ username, repo }: PathParams) {
  try {
    const { data } = await api.get<ResponseIssueProps[]>(
      `/repos/${username}/${repo}/issues`,
    )

    const repoIssues = data.map((item) => {
      return { ...item, createdAt: item.created_at, htmlUrl: item.html_url }
    })

    return { repoIssues }
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.code === '404') {
        return { repoIssues: null }
      }
    }
  }
}

export interface ResponseIssueProps {
  number: number
  title: string
  body: string
  created_at: string
  html_url: string
  comments: number
  user: {
    login: string
  }
}

export interface IssueProps
  extends Omit<ResponseIssueProps, 'created_at' | 'html_url'> {
  createdAt: string
  htmlUrl: string
}

export interface ResponseFilteredIssues {
  total_count: number
  incomplete_results: boolean
  items: ResponseIssueProps[]
}

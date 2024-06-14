import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './components/DefaultLayout'
import { Blog, IssueDetails } from './pages'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />} />
        <Route path="issue/:issueNumber" element={<IssueDetails />} />
      </Route>
    </Routes>
  )
}

import { Outlet } from 'react-router-dom'

import { Header } from '../Header'

export function DefaultLayout() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="mb-5 mt-[-6rem] flex w-[54rem] self-center">
        <Outlet />
      </div>
    </div>
  )
}

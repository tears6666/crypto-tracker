import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { PagesConfig } from './config/pages.config'

export default function App() {
  return (
    <Routes>
      <Route path={PagesConfig.HOME} element={<Layout />}>

      </Route>
    </Routes>
  )
}
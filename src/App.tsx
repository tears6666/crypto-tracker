import Dashboard from '@/components/dashboard/Market'
import Home from '@/components/home/Home'
import Layout from '@/components/layout/Layout'
import Wishlist from '@/components/wishlist/Wishlist'
import { PagesConfig } from '@/config/pages.config'
import { Route, Routes } from 'react-router-dom'

export default function App() {
	return (
		<Routes>
			<Route path={PagesConfig.HOME} element={<Layout />}>
				<Route index element={<Home />} />
				<Route path={PagesConfig.DASHBOARD} element={<Dashboard />} />
				<Route path={PagesConfig.WISHLIST} element={<Wishlist />} />
			</Route>
		</Routes>
	)
}

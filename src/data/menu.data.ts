import { PagesConfig } from '@/config/pages.config'
import type { IOverMenuItems } from '@/types/menu.types'

export const OVERVIEW_MENU_ITEMS: IOverMenuItems[] = [
	{
		id: 1,
		text: 'Home',
		link: PagesConfig.HOME,
	},
	{
		id: 2,
		text: 'Market',
		link: PagesConfig.DASHBOARD,
	},
	{
		id: 3,
		text: 'Favorites',
		link: PagesConfig.WISHLIST,
	},
]

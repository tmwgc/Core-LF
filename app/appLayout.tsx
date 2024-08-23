'use client'
import React, { useEffect } from 'react'
import {
	Head,
	Slick,
	Tail,
	Float,
	SplashScreen,
	Announcement,
	Contact,
	Nav,
} from './components'
import Settings from '../public/stores/settings.json'
import styles from './page.module.css'
import './globals.css'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function AppLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const { brand, navigation, announcement } = Settings
	const [isSlickOn, setIsSlickOn] = useState(false)

	const menuHandler = () => {
		setIsSlickOn(!isSlickOn)
	}

	// splash screen
	const pathname = usePathname()
	const isHome = pathname === '/'
	const [isLoading, setIsLoading] = useState(isHome)

	useEffect(() => {
		if (isLoading) {
			return
		}
	}, [isLoading])

	const renderSlick = (
		<main>
			{isLoading && isHome ? (
				<SplashScreen
					logoPath={brand.logoPath}
					finishLoading={() => setIsLoading(false)}
				/>
			) : (
				<>
					<div className={styles.headline}>
						<Announcement
							title={announcement.title}
							content={announcement.content}
							icons={announcement.icons}
						/>
						<Contact />
						<Head
							menuHandler={menuHandler}
							logoPath={brand.logoPathColor}
							homeLogo={navigation.homeIconUrl}
						/>
						{/* <Nav homeLogo={navigation.homeIconUrl} /> */}
					</div>

					{/* {isSlickOn && (
            <Slick
              menuHandler={menuHandler}
              ctrlLinks={links.ctrlLinks}
              logoPath={brand.logoPath}
            />
          )}

          {children}

          <Tail activeIcon={'/'} ctrlLinks={links.ctrlLinks} /> */}
				</>
			)}
		</main>
	)

	return renderSlick
}

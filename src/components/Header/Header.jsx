import logo from '../../assets/icons/logo.svg'
import styles from './Header.module.scss'
import RightHeader from './RightHeader'
import { useMediaQuery } from 'react-responsive'
import { motion, useCycle } from 'framer-motion'
import { useRef } from 'react'
import { Navigation } from './Navigation'
import { MenuToggle } from './MenuToggle'
import { useDimensions } from '../../hooks/useDimensions'

const sidebar = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at calc(100% - 50px) 40px)`,
		transition: {
			type: 'spring',
			stiffness: 20,
			restDelta: 2,
		},
	}),
	closed: {
		clipPath: `circle(30px at calc(100% - 50px) 40px)`,
		transition: {
			delay: 0.5,
			type: 'spring',
			stiffness: 400,
			damping: 40,
		},
	},
}

const Header = () => {
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })
	const [isOpen, toggleOpen] = useCycle(false, true)
	const containerRef = useRef(null)
	const { height } = useDimensions(containerRef)

	return (
		<header className={styles.header}>
			<img src={logo} alt="logo" />

			{!isTabletOrMobile ? (
				<ul className={styles.rightNav}>
					<RightHeader />
				</ul>
			) : (
				<motion.nav
					initial={false}
					animate={isOpen ? 'open' : 'closed'}
					custom={height}
					ref={containerRef}
				>
					<motion.div className={styles.background} variants={sidebar} />
					{isOpen && <Navigation />}
					<MenuToggle toggle={() => toggleOpen()} />
				</motion.nav>
			)}
		</header>
	)
}

export default Header

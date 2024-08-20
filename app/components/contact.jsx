'use client'

import Image from 'next/image'
import styles from '../styles/contact.module.css'

const Contact = () => {
	const callHandler = () => {
		window.location.href = 'tel:+91 8122801215'
	}

	const logoHandler = () => {
		router.replace('/')
	}

	return (
		<div className={styles.head}>
			<p className={styles.content_tags}>Investor Relations</p>
			<p className={styles.content_tags}>Press Releases</p>

			<div className={styles.help_line}>
				<Image
					style={{ cursor: 'pointer' }}
					onClick={callHandler}
					src={'/icons/phone.svg'}
					alt='alt'
					width={26}
					height={26}
				/>
				<div className={styles.contact_number}>
					<p
						style={{
							color: 'white',
							fontSize: '13px',
							margin: '0px',
						}}>
						Client Helpdesk
					</p>
					<p
						style={{
							color: 'white',
							fontSize: '13px',
							margin: '0px',
						}}>
						9677754778
					</p>
				</div>
			</div>
		</div>
	)
}

export default Contact

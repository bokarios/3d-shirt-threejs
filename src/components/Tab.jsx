import { useSnapshot } from 'valtio'
import state from '../store'

const Tab = ({
	tab,
	isFilterTab,
	isActiveTab,
	handleClick,
}) => {
	const snap = useSnapshot(state)

	const activeStyles =
		isFilterTab && isActiveTab
			? { backgroundColor: snap.color, opacity: 0.5 }
			: { backgroundColor: 'transparent', opacity: 1 }

	return (
		<div
			key={tab.name}
			className={`tab-btn ${
				isFilterTab
					? 'rounded-full glassmorphism'
					: 'rounded-4'
			}`}
			style={activeStyles}
			onClick={handleClick}
		>
			<img
				src={tab.icon}
				alt={`${tab.name} icon`}
				className={`${
					isFilterTab
						? 'w-2/3 h-2/3'
						: 'w-10/12 h-10/12 object-contain'
				}`}
			/>
		</div>
	)
}

export default Tab

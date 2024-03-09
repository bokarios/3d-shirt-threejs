const Logo = () => {
	return (
		<div className="flex items-center gap-2">
			<div className="w-10 md:w-14 aspect-square rounded-full border-2 border-gray-300/80 bg-gray-800">
				<img
					src="./me.png"
					className="w-full h-full object-cover rounded-full"
					alt="My picture"
				/>
			</div>
			<div className="uppercase text-sm md:text-lg font-bold text-gray-800">
				Abubakr
			</div>
		</div>
	)
}

export default Logo

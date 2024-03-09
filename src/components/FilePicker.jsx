import React from 'react'
import CustomButton from './CustomButton'
import { getContrastingColor } from '../config/helpers'
import { useSnapshot } from 'valtio'
import state from '../store'

const FilePicker = ({ file, setFile, readFile }) => {
	const snap = useSnapshot(state)
	return (
		<div className="filepicker-container">
			<div className="flex flex-1 flex-col">
				<input
					id="file-upload"
					type="file"
					accept="image/*"
					onChange={(e) => setFile(e.target.files[0])}
				/>
				<label
					htmlFor="file-upload"
					className="filepicker-label"
					style={{ color: getContrastingColor(snap.color) }}
				>
					Upload File
				</label>
				<p
					className="mt-2 text-gray-500 text-xs truncate"
					style={{
						color: getContrastingColor(snap.color),
						opacity: 0.65,
					}}
				>
					{file === '' ? 'No file selected' : file.name}
				</p>
			</div>
			<div className="flex flex-wrap mt-4 gap-3">
				<CustomButton
					type="outline"
					title="Logo"
					handleClick={() => readFile('logo')}
					customStyles="text-xs"
				/>
				<CustomButton
					type="filled"
					title="Full"
					handleClick={() => readFile('full')}
					customStyles="text-xs"
				/>
			</div>
		</div>
	)
}

export default FilePicker

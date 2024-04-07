import React from 'react';
import InfoSearchPageUI from './InfoSearchPageUI';

const mockRows = [
	{
		file: 'file1.txt',
		lines: [
			{
				text: 'Hello World',
				number: 42,
				hex: '0x2A',
			},
			{
				text: 'Goodbye World',
				number: 24,
				hex: '0x18',
			},
		],
	},
	{
		file: 'file2.txt',
		lines: [
			{
				text: 'Hello World',
				number: 42,
				hex: '0x2A',
			},
			{
				text: 'Goodbye World',
				number: 24,
				hex: '0x18',
			},
		],
	},
];

export default function InfoSearchPage() {
	return <InfoSearchPageUI rows={mockRows} />;
}

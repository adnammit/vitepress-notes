export default {
	lang: 'en-US',
	title: 'Dev Notes',
	description: 'Personal notes about things',
	themeConfig: {
		// logo: '/logo.svg',
		// nav: [...],
		sidebar: [
			{
				text: 'Dev Notes',
				collapsible: true,
				// collapsed: true,
				items: [
					{ text: 'Introduction', link: '/dev/' },
					{ text: 'The Bible', link: '/dev/bible' },
					{ text: 'Algorithms', link: '/dev/algorithms' },
					{ text: '.NET', link: '/dev/dotnet' },
				]
			}
		],
	}
}
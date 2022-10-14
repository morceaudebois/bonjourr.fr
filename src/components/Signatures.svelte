<script>
	const victor = {
		href: 'https://victr.me',
		title: "Victor's portfolio",
		text: 'Victor Azevedo',
	}

	const tahoe = {
		href: 'https://tahoe.be',
		title: "Tahoe's portfolio",
		text: 'Tahoe Beetschen',
	}

	$: signatures = Math.random() > 0.5 ? [tahoe, victor] : [victor, tahoe]
</script>

<a href="{signatures[0].href}" title="{signatures[0].title}">{signatures[0].text}</a>
&
<a href="{signatures[1].href}" title="{signatures[1].title}">{signatures[1].text}</a>

<style>
	a {
		color: white;
		font-weight: 500;
	}
</style>

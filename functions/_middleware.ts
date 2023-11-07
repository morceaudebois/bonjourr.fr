interface Env {
	BONJOURR_DB: D1Database
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
	try {
		const formData = await context.request.formData()
		const device = formData.get('browser') as string | null
		const message = formData.get('message') as string | null
		const timestamp = Date.now()
		const date = new Date().toLocaleString('fr-FR', { timeZone: 'UTC' })

		if (!message) throw new Error('message is null')
		if (message.length < 10) throw new Error('message is too short')
		if (message.length > 2000) throw new Error('message is too long')

		await context.env.BONJOURR_DB.prepare(
			'INSERT INTO form_entries (timestamp, date, device, message) VALUES (?, ?, ?, ?);'
		)
			.bind(timestamp, date, device, message)
			.run()

		return new Response('Message has been sent !')
		//
	} catch (err: any) {
		console.warn(err)
		return new Response(err, { status: 400 })
	}
}

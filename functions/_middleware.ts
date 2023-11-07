interface Env {
	BONJOURR_DB: D1Database
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
	try {
		const formData = await context.request.formData()
		const device = formData.get('browser')
		const message = formData.get('message')
		const timestamp = Date.now()
		const date = new Date().toLocaleString('fr-FR', { timeZone: 'UTC' })

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

interface Env {
	BONJOURR_DB: D1Database
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
	console.log(context)

	try {
		let input = await context.request.formData()
		let pretty = JSON.stringify([...input], null, 2)

		// Create a prepared statement with our query
		const ps = context.env.BONJOURR_DB.prepare('SELECT * from users')
		const data = await ps.first()

		console.log(data)

		return new Response(pretty, {
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
		})
	} catch (err) {
		return new Response('Error parsing JSON content', { status: 400 })
	}
}

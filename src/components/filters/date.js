export default (value) => {
	const date = new Date (value)
	return date.toLocaleString (['ru-RU'], {		
		year: 'numeric', 
		month: 'long', 
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit'

	})
}
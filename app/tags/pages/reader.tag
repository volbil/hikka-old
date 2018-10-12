<app-reader>
	<virtual>
		<div class="container">
			{ message }
		</div>
	</virtual>

	<script>
		this.on('route', id => {
			this.message = 'Завантаження...'
			this.update({message: `Манґа ${ id } не знайдена!`})
		})
	</script>

</app-reader>
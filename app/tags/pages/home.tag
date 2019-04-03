<app-home>
	<app-slider></app-slider>
	<div class="container">
		<div class="row">
			<div class="col-md-4">
				<div class="row">
					<div class="col">
						<div class="header">
							<span class="highlight">Профіль</span>
						</div>
					</div>
				</div>
				<statistics></statistics>
			</div>
			<div class="col-md-8">
				<div class="row">
					<div class="col">
						<div class="header">
							<span class="highlight">Оновлення</span>
						</div>
					</div>
				</div>
				<div class="row">
					<virtual each={updateItem in updates}>
						<div class="col-md-6 col-auto">
							<update params={updateItem}></update>
						</div>
					</virtual>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<div class="row">
					<div class="col">
						<div class="header">
							<span class="highlight">Топ онгоінгів</span>
						</div>
					</div>
				</div>
				<div class="row justify-content-center">
					<virtual each={release in top}>
						<div class="col-md col-auto">
							<release params={release} class="big"></release>
						</div>
					</virtual>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<div class="row">
					<div class="col">
						<div class="header">
							<span class="highlight">Манга</span>
						</div>
					</div>
				</div>
				<div class="row justify-content-center">
					<virtual each={release in releases}>
						<div class="col-md-4 col-auto">
							<release params={release}></release>
						</div>
					</virtual>
				</div>
			</div>
			<div class="col">
				<div class="row">
					<div class="col">
						<div class="header">
							<span class="highlight">Аніме</span>
						</div>
					</div>
				</div>
				<div class="row justify-content-center">
					<virtual each={release in releases}>
						<div class="col-md-4 col-auto">
							<release params={release}></release>
						</div>
					</virtual>
				</div>
			</div>
		</div>
	</div>
	<script>
		this.top = [
	      { cover: "https://dere.shikimori.org/system/animes/original/37999.jpg", rating: "PG-13", type: "TV", title: "Kaguya-sama wa Kokurasetai" },
	      { cover: "https://kawai.shikimori.org/system/animes/original/37086.jpg", rating: "R-17", type: "TV", title: "Kakegurui××" },
	      { cover: "https://nyaa.shikimori.org/system/animes/original/37510.jpg", rating: "PG-13", type: "TV", title: "Mob Psycho 100 II" },
	      { cover: "https://moe.shikimori.org/system/animes/original/36792.jpg", rating: "PG-13", type: "TV", title: "Eromanga-sensei" },
	      { cover: "https://dere.shikimori.org/system/animes/original/36474.jpg", rating: "PG-13", type: "TV", title: "Sword Art Online: Alicization" }
	    ];

		this.updates = [
	      { cover: "https://dere.shikimori.org/system/animes/original/37999.jpg", rating: "PG-13", type: "TV", title: "Kaguya-sama wa Kokurasetai" },
	      { cover: "https://kawai.shikimori.org/system/animes/original/37086.jpg", rating: "R-17", type: "TV", title: "Kakegurui××" },
	      { cover: "https://nyaa.shikimori.org/system/animes/original/37510.jpg", rating: "PG-13", type: "TV", title: "Mob Psycho 100 II" },
	      { cover: "https://moe.shikimori.org/system/animes/original/36792.jpg", rating: "PG-13", type: "TV", title: "Eromanga-sensei" }
	    ];

	    this.releases = [
	      { cover: "https://dere.shikimori.org/system/animes/original/37999.jpg", rating: "PG-13", type: "TV", title: "Kaguya-sama wa Kokurasetai" },
	      { cover: "https://kawai.shikimori.org/system/animes/original/37086.jpg", rating: "R-17", type: "TV", title: "Kakegurui××" },
	      { cover: "https://nyaa.shikimori.org/system/animes/original/37510.jpg", rating: "PG-13", type: "TV", title: "Mob Psycho 100 II" },
	      { cover: "https://dere.shikimori.org/system/animes/original/36474.jpg", rating: "PG-13", type: "TV", title: "Sword Art Online: Alicization" },
	      { cover: "https://nyaa.shikimori.org/system/animes/original/37430.jpg", rating: "PG-13", type: "TV", title: "Tensei shitara Slime Datta Ken" },
	      { cover: "https://moe.shikimori.org/system/animes/original/36792.jpg", rating: "PG-13", type: "OVA", title: "Eromanga-sensei" }
	    ];
	</script>
</app-home>
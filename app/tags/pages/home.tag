<app-home>
	<app-slider></app-slider>
	<div class="container">
		<div class="row">
			<div class="col">
				<div class="row">
					<div class="col">
						<div class="header">
							Топ онгоінгів
						</div>
					</div>
				</div>
				<div class="row justify-content-center">
					<virtual each={release in releases}>
						<div class="col-md-2 col-auto">
							<release cover={release.cover} rating={release.rating} type={release.type} title={release.title} ></release>
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
							Манга
						</div>
					</div>
				</div>
				<div class="row justify-content-center">
					<virtual each={release in releases}>
						<div class="col-md-4 col-auto">
							<release cover={release.cover} rating={release.rating} type={release.type} title={release.title} ></release>
						</div>
					</virtual>
				</div>
			</div>
			<div class="col">
				<div class="row">
					<div class="col">
						<div class="header">
							Аніме
						</div>
					</div>
				</div>
				<div class="row justify-content-center">
					<virtual each={release in releases}>
						<div class="col-md-4 col-auto">
							<release cover={release.cover} rating={release.rating} type={release.type} title={release.title} ></release>
						</div>
					</virtual>
				</div>
			</div>
		</div>
	</div>
	<script>
	    this.releases = [
	      { cover: "https://dere.shikimori.org/system/animes/original/37999.jpg", rating: "PG-13", type: "TV", title: "Kaguya-sama wa Kokurasetai" },
	      { cover: "https://kawai.shikimori.org/system/animes/original/37086.jpg", rating: "R-17", type: "TV", title: "Kakegurui××" },
	      { cover: "https://nyaa.shikimori.org/system/animes/original/37510.jpg", rating: "PG-13", type: "TV", title: "Mob Psycho 100 II" },
	      { cover: "https://dere.shikimori.org/system/animes/original/36474.jpg", rating: "PG-13", type: "TV", title: "Sword Art Online: Alicization" },
	      { cover: "https://nyaa.shikimori.org/system/animes/original/37430.jpg", rating: "PG-13", type: "TV", title: "Tensei shitara Slime Datta Ken" },
	      { cover: "https://moe.shikimori.org/system/animes/original/36792.jpg", rating: "PG-13", type: "OVA", title: "Eromanga-sensei" }
	    ]
	</script>
</app-home>
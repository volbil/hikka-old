<app-nav class="navbar navbar-expand-lg">
	<div class="container">
		<a class="navbar-brand" href="/">
			<img src="/img/logo-white.svg" width="100px">
		</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navItems" aria-controls="navItems" aria-expanded="false" aria-label="Toggle navigation">
			<span class="entypo list collapse-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navItems">
			<ul class="navbar-nav mx-auto">
				<li class="nav-item">
					<a class="nav-link" href="#">Аніме</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Манга</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Календар</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Про нас</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Правовласникам</a>
				</li>
			</ul>
			<ul class="navbar-nav">
				<li class="nav-item dropdown">
					<a class="nav-link" id="userDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="/img/sliders/1.png" class="avatar small"></a>
					<div class="dropdown-menu" aria-labelledby="userDropdown">
						<a class="dropdown-item" href="#">Action</a>
						<a class="dropdown-item" href="#">Another action</a>
						<a class="dropdown-item" href="#">Something else here</a>
					</div>
				</li>
			</ul>
		</div>
	</div>
</app-nav>
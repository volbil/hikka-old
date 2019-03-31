riot.tag2("hikka-app",'<app-nav></app-nav><app-search></app-search><router><route path="/"><app-home></app-home></route><route path="/m/*"><app-reader></app-reader></route><route path="/.."><app-404></app-404></route></router><app-footer></app-footer>',"","",function(p){});
riot.tag2("app-footer",'<footer><div class="container text-center"><div class="row justify-content-center align-items-center"><div class="col"><span>© hikka.com 2019</span></div></div></div></footer>',"","",function(t){});
riot.tag2("app-nav",'<div class="container"><a class="navbar-brand" href="/"><img src="/img/logo-white.svg" width="100px"></a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navItems" aria-controls="navItems" aria-expanded="false" aria-label="Toggle navigation"><span class="entypo list collapse-icon"></span></button><div class="collapse navbar-collapse" id="navItems"><ul class="navbar-nav mx-auto"><li class="nav-item"><a class="nav-link" href="#">Аніме</a></li><li class="nav-item"><a class="nav-link" href="#">Манга</a></li><li class="nav-item"><a class="nav-link" href="#">Календар</a></li><li class="nav-item"><a class="nav-link" href="#">Про нас</a></li><li class="nav-item"><a class="nav-link" href="#">Правовласникам</a></li></ul><ul class="navbar-nav"><li class="nav-item"><a class="nav-link" href="#"><span class="entypo bell"></span></a></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" id="userDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Photo</a><div class="dropdown-menu" aria-labelledby="userDropdown"><a class="dropdown-item" href="#">Action</a><a class="dropdown-item" href="#">Another action</a><a class="dropdown-item" href="#">Something else here</a></div></li></ul></div></div>',"",'class="navbar navbar-expand-lg"',function(a){});
riot.tag2("release",'<div class="cover-container" riot-style="background-image: url({opts.cover})"><div class="row no-gutters justify-content-start align-items-end h-100"><div class="col-auto"><div class="mark"> {opts.rating} </div></div><div class="col-auto"><div class="mark"> {opts.type} </div></div></div></div><div class="title"> {opts.title} </div>',"","",function(t){});
riot.tag2("app-search",'<form><input type="text" placeholder="Знайти аніме, мангу, користувача…" class="input search"></form>',"","",function(t){});
riot.tag2("app-slider",'<div id="carouselExampleControls" class="carousel slide" data-ride="carousel"><div class="carousel-inner h-100"><div class="carousel-item active"><img class="d-block w-100" src="/img/sliders/1.png" alt="First slide"></div><div class="carousel-item"><img class="d-block w-100" src="/img/sliders/1.png" alt="Second slide"></div></div><a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>',"","",function(s){});
riot.tag2("app-404",'<virtual><div class="container text-center my-5"><h2>¯\\_(404)_/¯</h2></div></virtual>',"","",function(t){});
riot.tag2("app-home",'<app-slider></app-slider><div class="container"><div class="row"><div class="col"><div class="row"><div class="col"><div class="header"> Топ онгоінгів </div></div></div><div class="row justify-content-center"><virtual each="{release in releases}"><div class="col-md-2 col-auto"><release cover="{release.cover}" rating="{release.rating}" type="{release.type}" title="{release.title}"></release></div></virtual></div></div></div><div class="row"><div class="col"><div class="row"><div class="col"><div class="header"> Манга </div></div></div><div class="row justify-content-center"><virtual each="{release in releases}"><div class="col-md-4 col-auto"><release cover="{release.cover}" rating="{release.rating}" type="{release.type}" title="{release.title}"></release></div></virtual></div></div><div class="col"><div class="row"><div class="col"><div class="header"> Аніме </div></div></div><div class="row justify-content-center"><virtual each="{release in releases}"><div class="col-md-4 col-auto"><release cover="{release.cover}" rating="{release.rating}" type="{release.type}" title="{release.title}"></release></div></virtual></div></div></div></div>',"","",function(e){this.releases=[{cover:"https://dere.shikimori.org/system/animes/original/37999.jpg",rating:"PG-13",type:"TV",title:"Kaguya-sama wa Kokurasetai"},{cover:"https://kawai.shikimori.org/system/animes/original/37086.jpg",rating:"R-17",type:"TV",title:"Kakegurui××"},{cover:"https://nyaa.shikimori.org/system/animes/original/37510.jpg",rating:"PG-13",type:"TV",title:"Mob Psycho 100 II"},{cover:"https://dere.shikimori.org/system/animes/original/36474.jpg",rating:"PG-13",type:"TV",title:"Sword Art Online: Alicization"},{cover:"https://nyaa.shikimori.org/system/animes/original/37430.jpg",rating:"PG-13",type:"TV",title:"Tensei shitara Slime Datta Ken"},{cover:"https://moe.shikimori.org/system/animes/original/36792.jpg",rating:"PG-13",type:"OVA",title:"Eromanga-sensei"}]});
riot.tag2("app-reader",'<virtual><div class="container"> {message} </div></virtual>',"","",function(a){this.on("route",a=>{this.message="Завантаження...",this.update({message:`Манґа ${a} не знайдена!`})})});
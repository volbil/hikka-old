<hikka-app>
	<app-nav></app-nav>
	<router>
		<route path="/"><app-home></app-home></route> <!-- HOME -->
		<route path="/m/*"><app-reader></app-reader></route> <!-- READER -->
		<route path="/.."><app-404></app-404></route> <!-- 404 -->
	</router>
	<app-footer></app-footer>
</hikka-app>
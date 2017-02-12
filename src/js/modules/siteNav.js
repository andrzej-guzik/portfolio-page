import $ from "jquery";
import smoothScroll from "jquery-smooth-scroll";

class SiteNav {
	constructor() {
		this.menuIcon = document.querySelector(".site-header__menu-icon");
		this.siteNav = document.querySelector(".site-nav");
		this.siteLinks = $(".site-nav a");
		this.addSmothScrolling({offset: -64});
		this.events();
	}

	closeNav() {
		this.siteNav.classList.remove("site-nav--is-expanded");
		this.menuIcon.classList.remove("site-header__menu-icon--close");
	}

	addSmothScrolling() {
		const that = this;
		this.siteLinks.smoothScroll({
			afterScroll: function() {
				this.blur();
				that.closeNav();
			}
		});
	}

	events() {
		this.menuIcon.addEventListener("click", this.toggleMenu.bind(this));
	}

	toggleMenu() {
		const hasClass = this.siteNav.classList.contains("site-nav--is-expanded");

		if (!hasClass) {
			this.siteNav.classList.add("site-nav--is-expanded");
			this.menuIcon.classList.add("site-header__menu-icon--close");
			return;
		}

		this.closeNav();
	}
}

export default SiteNav;

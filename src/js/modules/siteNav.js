import $ from "jquery";
import smoothScroll from "jquery-smooth-scroll";

class SiteNav {
	constructor() {
		this.menuIcon = document.querySelector(".menu-icon");
		this.siteNav = document.querySelector(".site-nav");
		this.navTrigger = document.querySelector(".hero__content");
		this.siteSections = document.querySelectorAll("#home, section");
		this.siteLinks = $(".site-nav a");
		this.addSmothScrolling({offset: -64});
		this.stickyNav();
		this.activeLinks();
		this.events();
	}

	closeNav() {
		this.siteNav.classList.remove("site-nav--is-expanded");
		this.menuIcon.classList.remove("menu-icon--close");
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
			this.menuIcon.classList.add("menu-icon--close");
			return;
		}

		this.closeNav();
	}

	stickyNav() {
		const that = this;
		new Waypoint({
			element: that.navTrigger,
			handler: (direction) => {
				if (direction === "down") {
					that.siteNav.classList.add("site-nav--fixed");
				} else {
					that.siteNav.classList.remove("site-nav--fixed");
				}

			},
			offset: "300"
		});
	}

	activeLinks() {
		const that = this;
		[...this.siteSections].map((section) => {
			new Waypoint({
				element: section,
				handler: (direction) => {
					if (direction === "down") {
						const linkId = section.dataset.link;
						const matchingLink = document.querySelector(linkId);
						[...that.siteLinks].map((item) => {
							item.classList.remove("is-active");
						});
						matchingLink.classList.add("is-active");
					}
				},
				offset: "15%"
			});
			new Waypoint({
				element: section,
				handler: (direction) => {
					if (direction === "up") {
						const linkId = section.dataset.link;
						const matchingLink = document.querySelector(linkId);
						[...that.siteLinks].map((item) => {
							item.classList.remove("is-active");
						});
						matchingLink.classList.add("is-active");
					}
				},
				offset: "-70"
			});
		});
	}

}

export default SiteNav;

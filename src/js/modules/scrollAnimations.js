import waypoints from "../../../node_modules/waypoints/lib/noframework.waypoints";

class ScrollAnimations {
	constructor() {
		this.animateItems = document.querySelectorAll(".animate");
		this.drawItems = document.querySelector(".technologies");
		this.setItems();
		this.createAnimations();
		this.drawIcons();
	}

	setItems() {
		const animateItemsArr = Array.from(this.animateItems);
		animateItemsArr.map((item) => {
			item.classList.add("animate-item");
		});
	}

	createAnimations() {
		const animateItemsArr = Array.from(this.animateItems);
		animateItemsArr.map((item) => {
			new Waypoint({
				element: item,
				handler: () => {
					item.classList.add("animate-item--is-visible");
				},
				offset: "95%"
			});
		});
	}

	drawIcons() {
		const that = this;
		new Waypoint({
			element: that.drawItems,
			handler: () => {
				that.drawItems.classList.add("technologies--drawing");
			},
			offset: "75%"
		});
	}
}

export default ScrollAnimations;

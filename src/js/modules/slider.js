import $ from "jquery";
import slick from "slick-carousel";

class Slider {
	constructor() {
		this.sliderItems = $(".portfolio-slider");
		this.viewportWidth = window.innerWidth;
		this.prevArrow = $(".pagination__prev");
		this.nextArrow = $(".pagination__next");
		this.startSlider();
	}

	startSlider() {
		const MQ = 992;
		const config = {
			autoplay: true,
			centerMode: true,
			prevArrow: this.prevArrow,
			nextArrow: this.nextArrow,
			lazyLoad: "ondemand",
			dots: true,
			infinite: true,
			speed: 400,
			slidesToShow: 1
		};

		if (this.viewportWidth > MQ)
			this.sliderItems.slick(config);
	}
}

export default Slider;

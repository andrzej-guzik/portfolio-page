import axios from "axios";
import serialize from "form-serialize";
import isEmail from "validator/lib/isEmail";

class FormValid {
	constructor() {
		this.contactForm = document.getElementById("contact-form");
		this.formFields = document.querySelectorAll("#contact-form input, #contact-form textarea");
		this.formMessage = document.getElementById("form-message");
		this.emailUnderLine = document.getElementById("email-underline");
		this.messageUnderLine = document.getElementById("message-underline");
		this.events();
	}

	events() {
		this.contactForm.addEventListener("submit", this.checkForm.bind(this));
	}

	sendForm() {
		const url = this.contactForm.getAttribute("action");
		const formData = serialize(this.contactForm);
		const request = axios.post(url, formData);
		let formMessage = "";

		request.then(() => {
			formMessage = "Wiadomość została wysłana poprawnie.";
			this.formMessage.classList.remove("form-message--error");
			this.formMessage.classList.add("form-message--success");
			[...this.formFields].map((field) => {
				field.value = "";
			});
		}).catch(() => {
			formMessage = "Wystąpił błąd podczas wysyłania formularza. Proszę spróbować ponownie.";
			this.formMessage.classList.add("form-message--error");
			this.formMessage.innerText = formMessage;
		});
	}

	checkForm(e) {
		e.preventDefault();

		let hasErrors = false;
		let formMessage = "";
		const email = this.contactForm.email.value.trim();
		const message = this.contactForm.message.value.trim();

		this.emailUnderLine.classList.remove("input-underline--error");
		this.messageUnderLine.classList.remove("input-underline--error");

		if (!message) {
			hasErrors = true;
			this.contactForm.message.focus();
			this.messageUnderLine.classList.add("input-underline--error");
		}

		if (!email) {
			hasErrors = true;
			this.contactForm.email.focus();
			this.emailUnderLine.classList.add("input-underline--error");
		} else {
			if (!isEmail(email)) {
				formMessage = "Podaj prawidłowy adres email!";
				this.contactForm.email.focus();
				this.formMessage.innerText = formMessage;
				this.emailUnderLine.classList.add("input-underline--error");
				this.formMessage.classList.add("form-message--error");
				return;
			}
		}

		if (hasErrors) {
			formMessage = "Pola email oraz wiadomość nie mogą być puste!";
			this.formMessage.classList.add("form-message--error");
			this.formMessage.innerText = formMessage;
			return;
		}

		this.sendForm();
	}
}

export default FormValid;

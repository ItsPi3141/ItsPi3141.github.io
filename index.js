document.getElementById("surnia-download").addEventListener("click", () => {
	location.href = "surnia-roms/index.html";
});
document.getElementById("dreamlte-download").addEventListener("click", () => {
	location.href = "dreamlte-roms/index.html";
});
document.getElementById("dreamlte-tree").addEventListener("click", () => {
	window.open("https://github.com/ItsPi3141/samsung_exynos8895_manifest");
});
document.getElementById("intervoyage-invite").addEventListener("click", () => {
	window.open("https://discord.com/api/oauth2/authorize?client_id=1076395857961811988&permissions=0&scope=bot%20applications.commands");
});
document.getElementById("elonbot-invite").addEventListener("click", () => {
	window.open("https://discord.com/oauth2/authorize?client_id=1045948424102629406&permissions=274877992000&scope=applications.commands%20bot");
});

document.addEventListener("scroll", () => {
	if (this.scrollY > window.innerHeight - 69) {
		document.getElementById("nav").classList.add("stick-to-top");
	} else {
		document.getElementById("nav").classList.remove("stick-to-top");
	}
});

const scrollBehavior = { block: "center", inline: "center", behavior: "smooth" };
document.querySelector("a.connection.languages").addEventListener("click", () => {
	document.getElementById("languages").scrollIntoView(scrollBehavior);
});
document.querySelector("a.connection.works").addEventListener("click", () => {
	document.getElementById("works").scrollIntoView(scrollBehavior);
});

document.querySelector("a.connection.discord").addEventListener("click", () => {
	document.getElementById("discord-modal").classList.remove("hidden");
});
document.getElementById("discord-modal-close").addEventListener("click", () => {
	document.getElementById("discord-modal").classList.add("hidden");
});
document.querySelector("#discord-modal div.modal-content code").addEventListener("click", (e) => {
	try {
		let successful = document.execCommand("copy");
		var text = document.querySelector("#discord-modal div.modal-content p").innerText;
		setTimeout(() => {
			document.querySelector("#discord-modal div.modal-content p").innerText = text;
			document.querySelector("#discord-modal div.modal-content p").classList.remove("success");
		}, 1500);
		document.querySelector("#discord-modal div.modal-content p").innerText = "Copied!";
		document.querySelector("#discord-modal div.modal-content p").classList.add("success");
	} catch (err) {
		var text = document.querySelector("#discord-modal div.modal-content p").innerText;
		setTimeout(() => {
			document.querySelector("#discord-modal div.modal-content p").innerText = text;
			document.querySelector("#discord-modal div.modal-content p").classList.remove("error");
		}, 1500);
		document.querySelector("#discord-modal div.modal-content p").innerText = "Failed to copy";
		document.querySelector("#discord-modal div.modal-content p").classList.add("error");
	}
});
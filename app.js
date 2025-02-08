const imageInput = document.querySelector("#imageInput");
const result = document.querySelector("#result");

imageInput.addEventListener("change", function () {
    const files = this.files;
    result.innerHTML = "";

    for (const file of files) {
        if (file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const img = document.createElement("img");
                img.src = e.target.result;
                img.id = "imgCard";
                result.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
    }
});

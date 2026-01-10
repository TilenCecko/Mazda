document.getElementById("mojaTocka").addEventListener("click", function () {
    Swal.fire({
        title: "Izberi barvo logotipa",
        html: '<div id="color-picker"></div>',
        showConfirmButton: false,
        didOpen: () => {
            const pickr = Pickr.create({
                el: '#color-picker',
                theme: 'classic',
                default: '#000000',
                components: {
                    preview: true,
                    opacity: true,
                    hue: true,
                    interaction: {
                        hex: true,
                        rgba: true,
                        input: true,
                        save: true
                    }
                }
            });

            // 🔥 Ko uporabnik klikne SAVE → dobimo barvo
            pickr.on('save', (color) => {
                const hex = color.toHEXA().toString(); // ← tukaj dobiš barvo

                // Spremeni barvo SVG logotipa
                document.getElementById("logo").setAttribute("fill", hex);
             

                pickr.hide();
                Swal.close();
            });
        }
    });
});

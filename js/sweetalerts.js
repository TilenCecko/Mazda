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

            pickr.on('save', (color) => {
                const hex = color.toHEXA().toString(); // ← tukaj dobiš barvo

                document.getElementById("logo").setAttribute("fill", hex);
             

                pickr.hide();
                Swal.close();
            });
        }
    });
});

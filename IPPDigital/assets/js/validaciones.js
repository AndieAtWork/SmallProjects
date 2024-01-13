$(document).ready(function(){

    function validarCompletitudFormulario(event){
        var camposVacios = [];

        
        $(this).find('input, textarea').each(function(){
            if ($(this).val().trim() == ''){
                camposVacios.push($(this).attr('name'));
            }
        })
        if (camposVacios.length > 0){
            event.preventDefault();
            alert("Por favor ingresar los sieguientes campos: \n- " + camposVacios.join("\n- "))
        }
    }

    console.log("recibiendo cambios2")
    $('#form-productos').on("submit", validarCompletitudFormulario);
    $('#form-categorias').on("submit", validarCompletitudFormulario);
})


//alert("hola")
new Vue({
    el: '#main',
    data: {
        rut: '',
        clave: '',
    },

    methods: {
        iniciando_sesion: function() {

            var url = 'iniciando_sesion';
            axios.post(url, {
                rut: this.rut,
                clave: this.clave
            }).then(response => {

                this.rut = '';
                this.clave = '';

                toastr.success('', 'iniciando sesion', {
                    "closeButton": true,
                    "positionClass": "toast-bottom-right"
                });
            }).catch(error => {

                this.errors = error.response;

            });
        }
    }
});
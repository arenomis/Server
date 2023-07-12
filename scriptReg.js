var passwordReg = new Vue({
    el: '#password',
    data: {
      passwordUs: '',
      passwordUs2: '',
      showError: false
    },
    methods: {
      RegUser: function() {
        if (this.passwordUs !== this.passwordUs2) {
          // Пароли не совпадают, показываем сообщение об ошибке
          this.showError = true;
          return;
        }
        
        // Дополнительный код для сохранения данных
        
        // Сброс ошибки и паролей после сохранения
        this.showError = false;
        this.passwordUs = '';
        this.passwordUs2 = '';
      }
    }
  });
  


/*function CorrectReg(){
    const btn = document.getElementById("RegUser") = {
        methods:{
            RegUser() {
                if (this.passwordUs !== passwordUs2) {
                    alert ('пароли должны совпадать')
                    return;
                }
            }
        }
    }
}*/
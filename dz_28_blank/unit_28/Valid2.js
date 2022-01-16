class Valid2 extends Valid {
    constructor(email, password, emailError, passwordError) {
        super(email, password);
        this.emailError = '';
        this.passwordError = '';
    }
    validate() {
        super.validate();
        if (this.isValid == false) {
            console.log(this.passwordError);
            return false;
        }
        if (this.email == '') {
            this.isValid = false;
            console.log(this.emailError);
            return false;
        }
        return true;
    }
}
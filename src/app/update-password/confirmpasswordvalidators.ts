import { AbstractControl, ValidationErrors } from "@angular/forms";

export const matchpassword = (control: AbstractControl): ValidationErrors | null => {


    let password = control.get('password');
    let confirmpassword = control.get('confirm_password');

    if (password && confirmpassword && password?.value != confirmpassword?.value) {
        return {
            passwordmatcherorr: true
        }
    }

    return null;
}
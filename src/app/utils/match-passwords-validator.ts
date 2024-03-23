import { ValidatorFn } from "@angular/forms";



export function matchPasswords(passControl: string, condfirmPassControl: string): ValidatorFn {
    return (control) => {
        
        const pass = control.get(passControl)
        const rePass= control.get(condfirmPassControl)

        const matchingPass = pass?.value === rePass?.value;
        
        
        return matchingPass 
        ? null: {matchPasswords: true};
    }
}
import { FormGroup } from '@angular/forms';


export function usuarioSenhaIguaisValidator(formGroup: FormGroup) {
    const username = formGroup.get('userName')?.value ?? ''; // " (?? '') significa que se for vazio, recebe string"
    const password = formGroup.get('password')?.value ?? '';

    if (username.trim() + password.trim()) {
        return username !== password ? null : { senhaIgualUsuario: true }
    } else {
        return null;
    }
}
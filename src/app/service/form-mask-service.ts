import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export default class FormMaskService {

    maskDateSlash: (string | RegExp)[] = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
    maskDateDash: (string | RegExp)[] = [/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    maskHour: (string | RegExp)[] = [/\d/, /\d/, ':', /\d/, /\d/, ':', /\d/, /\d/];
    maskDateHour: (string | RegExp)[] = [/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ':', /\d/, /\d/, ':', /\d/, /\d/];
    maskMobileNo: (string | RegExp)[] = [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
    maskTeleNo: (string | RegExp)[] = [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    phoneMask: (string | RegExp)[] = ['(', /\d/, /\d/, ')', ' ', /\d?/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

    constructor(){

    }

}
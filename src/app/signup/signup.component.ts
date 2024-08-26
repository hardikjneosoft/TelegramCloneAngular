import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  static countries = [
    { "code": "IN", "name": "India", "flag": "🇮🇳", "phoneCode": "+91" },
    { "code": "US", "name": "USA", "flag": "🇺🇸", "phoneCode": "+1" },
    { "code": "CA", "name": "Canada", "flag": "🇨🇦", "phoneCode": "+1" },
    { "code": "GB", "name": "UK", "flag": "🇬🇧", "phoneCode": "+44" },
    { "code": "AU", "name": "Australia", "flag": "🇦🇺", "phoneCode": "+61" },
    { "code": "FR", "name": "France", "flag": "🇫🇷", "phoneCode": "+33" },
    { "code": "DE", "name": "Germany", "flag": "🇩🇪", "phoneCode": "+49" },
    { "code": "IT", "name": "Italy", "flag": "🇮🇹", "phoneCode": "+39" },
    { "code": "JP", "name": "Japan", "flag": "🇯🇵", "phoneCode": "+81" },
    { "code": "CN", "name": "China", "flag": "🇨🇳", "phoneCode": "+86" },
    { "code": "KR", "name": "South Korea", "flag": "🇰🇷", "phoneCode": "+82" },
    { "code": "BR", "name": "Brazil", "flag": "🇧🇷", "phoneCode": "+55" },
    { "code": "ZA", "name": "South Africa", "flag": "🇿🇦", "phoneCode": "+27" },
    { "code": "RU", "name": "Russia", "flag": "🇷🇺", "phoneCode": "+7" },
    { "code": "MX", "name": "Mexico", "flag": "🇲🇽", "phoneCode": "+52" },
    { "code": "ES", "name": "Spain", "flag": "🇪🇸", "phoneCode": "+34" },
    { "code": "NL", "name": "Netherlands", "flag": "🇳🇱", "phoneCode": "+31" },
    { "code": "SE", "name": "Sweden", "flag": "🇸🇪", "phoneCode": "+46" },
    { "code": "CH", "name": "Switzerland", "flag": "🇨🇭", "phoneCode": "+41" },
    { "code": "AR", "name": "Argentina", "flag": "🇦🇷", "phoneCode": "+54" },
    { "code": "CO", "name": "Colombia", "flag": "🇨🇴", "phoneCode": "+57" },
    { "code": "TH", "name": "Thailand", "flag": "🇹🇭", "phoneCode": "+66" },
    { "code": "SG", "name": "Singapore", "flag": "🇸🇬", "phoneCode": "+65" },
    { "code": "NZ", "name": "New Zealand", "flag": "🇳🇿", "phoneCode": "+64" },
    { "code": "PL", "name": "Poland", "flag": "🇵🇱", "phoneCode": "+48" },
    { "code": "IE", "name": "Ireland", "flag": "🇮🇪", "phoneCode": "+353" },
    { "code": "DK", "name": "Denmark", "flag": "🇩🇰", "phoneCode": "+45" },
    { "code": "NO", "name": "Norway", "flag": "🇳🇴", "phoneCode": "+47" },
    { "code": "FI", "name": "Finland", "flag": "🇫🇮", "phoneCode": "+358" },
    { "code": "TR", "name": "Turkey", "flag": "🇹🇷", "phoneCode": "+90" },
    { "code": "SA", "name": "Saudi Arabia", "flag": "🇸🇦", "phoneCode": "+966" },
    { "code": "AE", "name": "United Arab Emirates", "flag": "🇦🇪", "phoneCode": "+971" },
    { "code": "PH", "name": "Philippines", "flag": "🇵🇭", "phoneCode": "+63" },
    { "code": "VN", "name": "Vietnam", "flag": "🇻🇳", "phoneCode": "+84" },
    { "code": "MY", "name": "Malaysia", "flag": "🇲🇾", "phoneCode": "+60" },
    { "code": "HK", "name": "Hong Kong", "flag": "🇭🇰", "phoneCode": "+852" },
    { "code": "TW", "name": "Taiwan", "flag": "🇹🇼", "phoneCode": "+886" },
    { "code": "NG", "name": "Nigeria", "flag": "🇳🇬", "phoneCode": "+234" },
    { "code": "EG", "name": "Egypt", "flag": "🇪🇬", "phoneCode": "+20" },
    { "code": "KE", "name": "Kenya", "flag": "🇰🇪", "phoneCode": "+254" },
    { "code": "GH", "name": "Ghana", "flag": "🇬🇭", "phoneCode": "+233" },
    { "code": "IL", "name": "Israel", "flag": "🇮🇱", "phoneCode": "+972" },
    { "code": "IQ", "name": "Iraq", "flag": "🇮🇶", "phoneCode": "+964" },
    { "code": "IR", "name": "Iran", "flag": "🇮🇷", "phoneCode": "+98" },
    { "code": "PK", "name": "Pakistan", "flag": "🇵🇰", "phoneCode": "+92" },
    { "code": "BD", "name": "Bangladesh", "flag": "🇧🇩", "phoneCode": "+880" },
    { "code": "LK", "name": "Sri Lanka", "flag": "🇱🇰", "phoneCode": "+94" },
    { "code": "MM", "name": "Myanmar", "flag": "🇲🇲", "phoneCode": "+95" },
    { "code": "NP", "name": "Nepal", "flag": "🇳🇵", "phoneCode": "+977" },
    { "code": "UZ", "name": "Uzbekistan", "flag": "🇺🇿", "phoneCode": "+998" },
    { "code": "KZ", "name": "Kazakhstan", "flag": "🇰🇿", "phoneCode": "+7" },
    { "code": "AZ", "name": "Azerbaijan", "flag": "🇦🇿", "phoneCode": "+994" },
    { "code": "GE", "name": "Georgia", "flag": "🇬🇪", "phoneCode": "+995" },
    { "code": "AM", "name": "Armenia", "flag": "🇦🇲", "phoneCode": "+374" },
    { "code": "MD", "name": "Moldova", "flag": "🇲🇩", "phoneCode": "+373" },
    { "code": "BY", "name": "Belarus", "flag": "🇧🇾", "phoneCode": "+375" },
    { "code": "UA", "name": "Ukraine", "flag": "🇺🇦", "phoneCode": "+380" },
    { "code": "LT", "name": "Lithuania", "flag": "🇱🇹", "phoneCode": "+370" },
    { "code": "LV", "name": "Latvia", "flag": "🇱🇻", "phoneCode": "+371" },
    { "code": "EE", "name": "Estonia", "flag": "🇪🇪", "phoneCode": "+372" },
    { "code": "MT", "name": "Malta", "flag": "🇲🇹", "phoneCode": "+356" },
    { "code": "SI", "name": "Slovenia", "flag": "🇸🇮", "phoneCode": "+386" },
    { "code": "HR", "name": "Croatia", "flag": "🇭🇷", "phoneCode": "+385" },
    { "code": "BA", "name": "Bosnia and Herzegovina", "flag": "🇧🇦", "phoneCode": "+387" },
    { "code": "ME", "name": "Montenegro", "flag": "🇲🇪", "phoneCode": "+382" },
    { "code": "RS", "name": "Serbia", "flag": "🇷🇸", "phoneCode": "+381" },
    { "code": "MK", "name": "North Macedonia", "flag": "🇲🇰", "phoneCode": "+389" },
    { "code": "AL", "name": "Albania", "flag": "🇦🇱", "phoneCode": "+355" },
    { "code": "XK", "name": "Kosovo", "flag": "🇽🇰", "phoneCode": "+383" }
];

    ref = SignupComponent
    signUpForm:FormGroup;
    constructor(){
      let form = {
        fname:new FormControl("",[Validators.required],),
        lname:new FormControl("",[Validators.required]),
        username:new FormControl("",[Validators.minLength(5),Validators.pattern(/^[a-zA-Z0-9]{5,}$/)],),
        ccode:new FormControl("+91"),
        phone:new FormControl("+91 ",[Validators.pattern(/^\+\d{1,3} \d{4,14}$/)],)
      }
      this.signUpForm = new FormGroup(form,)

    }


    get fname(){
      return this.signUpForm.get('fname')
    }
    get lname(){
      return this.signUpForm.get('lname')
    }
    get username(){
      return this.signUpForm.get('username')
    }
    get phone(){
      return this.signUpForm.get('phone')
    }

    get ccode(){
      return this.signUpForm.get('ccode')
    }
    display(){console.log(this.phone);
    }

}

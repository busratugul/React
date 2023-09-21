import * as yup from 'yup'
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/

export const basicSchema = yup.object().shape({
    email: yup.string().email("Geçerli bir email giriniz.").required("Email girmek zorunludur!"),

    age: yup.number().positive("Lütfen geçerli bir sayı giriniz.").integer("Lütfen yaşınızı tam sayı olarak giriniz").required("Yaş girmek zorunludur!"),

    password: yup.string().min(5,"Şifre minimum 5 karakter olmalıdır").matches(passwordRules,{
        message:"Lütfen en az bir büyük harf, bir küçük harf giriniz."
    }).required("Şifre girmek zorunludur!"),

    confirmPassword: yup.string().oneOf([yup.ref("password")], "Şifreler eşleşmiyor.").required("Tekrar şifre girmek zorunludur.")
})

export const advancedSchema = yup.object().shape({
    username: yup
    .string()
    .min(3,"Kullanıcı adı en az 3 harften oluşmalıdır.")
    .required("Kullanıcı adı girmek zorunludur!"),

    university: yup
    .string()
    .oneOf(["Boğaziçi", "GSU", "ODTU" , "ITU", "Istanbul"],"Lütfen üniversitenizi seçiniz.")
    .required("Üniversite girmek zorunludur!"),

    isAccepted: yup
    .boolean()
    .oneOf([true], "Lütfen kullanım koşullarını kabul ediniz..")
    .required("Kullanım koşullarını kabul etmek zorunludur..")
})
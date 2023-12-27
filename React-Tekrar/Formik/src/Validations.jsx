import * as yup from 'yup'

const schema = yup.object({
  nickName: yup
    .string()
    .required('Zorunlu alan')
    .test('contains-no-number', 'Kullanıcı adında sayı bulunamaz', (value) => {
      return !/\d/.test(value)
    })
    .min(3, 'Kullanıcı adı en az 3 karakterden oluşmalıdır.'),
  email: yup
    .string()
    .email('Geçerli bir email giriniz.')
    .required('Zorunlu alan'),
  password: yup
    .number('Şifre sayılardan oluşmalıdır.')
    .min(5, 'Şifreniz en az 5 karakterden oluşmalıdır')
    .required('Zorunlu alan'),
  passwordConfirm: yup
    .number()
    .oneOf([yup.ref('password')], 'Şifreler uyumlu değil')
    .required('Zorunlu alan'),
})

export default schema

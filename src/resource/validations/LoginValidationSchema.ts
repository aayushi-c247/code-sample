import * as Yup from 'yup';
import { ILoginFormValues } from '../../interfaces';
import { messages } from '../../common';

export const LoginValidationSchema: Yup.ObjectSchema<Yup.Shape<
  object,
  ILoginFormValues
>> = Yup.object().shape<ILoginFormValues>({
  userName: Yup.string()
    .trim()
    .required(messages.USERNAME_REQUIRED),
  password: Yup.string()
    .min(6, messages.MIN_LENGTH_PASSWORD)
    .required(messages.REQUIRED_PASSWORD),
});

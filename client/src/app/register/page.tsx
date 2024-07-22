'use client';
import { useForm } from '@mantine/form'
import { Button, PasswordInput, TextInput } from '@mantine/core';
import classes from './Register.module.css';
import RegistrationForm from '@/types/registrationForm';
import submitRegistrationForm from '@/lib/submitRegistrationForm';

export default function Register() {

  const form = useForm<RegistrationForm>({
    mode: 'uncontrolled',
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      username: (username) => (username.length < 6 ? 'Username must be more than 5 characters': null),
      confirmPassword: (value, values) => (value !== values.password ? 'Passwords did not match' : null),
    }
  })

  return(
    <div className={classes.registerContainer}>
      <form onSubmit={form.onSubmit(submitRegistrationForm)}>
        <TextInput
          withAsterisk
          label='username'
          placeholder='dJohn98'
          {...form.getInputProps('username')}
        />
        <TextInput
          withAsterisk
          label='email'
          placeholder='johndoe@email.com'
          {...form.getInputProps('email')}
        />
        <PasswordInput
          withAsterisk
          label='password'
          placeholder='Password'
          {...form.getInputProps('password')}
        />
        <PasswordInput
            label="Confirm password"
            placeholder="Confirm Password"
            {...form.getInputProps('confirmPassword')}
          />  
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  )
}

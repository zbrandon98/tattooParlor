'use client';
import { useForm } from '@mantine/form'
import { Button, PasswordInput, TextInput } from '@mantine/core';
import { FormEvent } from 'react';

export default function Register() {
  
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: 'notSamePassword',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      firstName: (name) => (name.length < 2 ? 'First name must be more than 1 character' : null),
      lastName: (name) => (name.length < 2 ? 'Last name must be more than 1 character' : null),
      username: (username) => (username.length < 6 ? 'Username must be more than 5 characters': null),
      confirmPassword: (value, values) => (value !== values.password ? 'Passwords did not match' : null),
    }
  })

  return(
    <form onSubmit={form.onSubmit((values) => {console.log(values)})}>
      <TextInput
        withAsterisk
        label='First Name'
        placeholder='John'
        key={form.key('firstName')}
        {...form.getInputProps('firstName')}
      />
      <TextInput
        withAsterisk
        label='last Name'
        placeholder='Doe'
        key={form.key('lastName')}
        {...form.getInputProps('lastName')}
      />
      <TextInput
        withAsterisk
        label='username'
        placeholder='dJohn98'
        key={form.key('username')}
        {...form.getInputProps('username')}
      />
      <TextInput
        withAsterisk
        label='email'
        placeholder='johndoe@email.com'
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <PasswordInput
        withAsterisk
        label='password'
        placeholder='Password'
        key={form.key('password')}
        {...form.getInputProps('password')}
      />
      <PasswordInput
          label="Confirm password"
          placeholder="Confirm Password"
          key={form.key('confirmPassword')}
          {...form.getInputProps('confirmPassword')}
        />  
      <Button type='submit'>Submit</Button>
    </form>

  )
}

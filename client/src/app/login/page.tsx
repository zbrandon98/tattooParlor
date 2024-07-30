'use client';
import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
  } from '@mantine/core';
  import classes from './Login.module.css';
  import { useForm } from '@mantine/form';
  import LoginForm from '@/types/loginForm';
  import submitLoginForm from '@/lib/submitLoginForm';
  
  export default function LoginPage() {
    const form = useForm<LoginForm>({
      mode: 'uncontrolled',
      initialValues: {
        username: '',
        password: '',
      },

      validate: {
        username: (username) => (username.length < 6 ? 'Username must be more than 5 characters': null),
        password: (password) => (password.length < 6 ? 'Password must be more than 5 characters' : null),
      }
  })

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Welcome back!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Do not have an account yet?{' '}
        <Anchor size="sm" component="button">
          Create account
        </Anchor>
      </Text>

      <form onSubmit={form.onSubmit(submitLoginForm)}>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput withAsterisk label="username" placeholder="dJoe00" {...form.getInputProps('username')} required />
          <PasswordInput label="password" placeholder="Your password" {...form.getInputProps('password')} required mt="md" />
          <Group justify="space-between" mt="lg">
            <Checkbox label="Remember me" />
            <Anchor component="button" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl" type='submit'>
            Sign in
          </Button>
        </Paper>
      </form>
    </Container>
  );
  }
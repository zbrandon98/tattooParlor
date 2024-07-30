import LoginForm from "@/types/loginForm";

export default async function submitLoginForm(form: LoginForm) {
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
        });

        if (!response.ok) {
            console.log('Error: Login Response was not between 200-299');
            const errorResponse = await response.json();
            console.log(`Error details: ${JSON.stringify(errorResponse)}`);
            return;
        }

        const data = await response.json();
        console.log(`1. ${data}`)
        console.log(`2. ${JSON.stringify(data)}`)
    } catch (error) {
        console.error('An error occurred', error);
    }

}
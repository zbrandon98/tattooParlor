import RegistrationForm from "@/types/registrationForm";

export default async function submitRegistrationForm(form: RegistrationForm) {
  try {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(form)
    })

    if (!response.ok) {
      console.log('Error. Registration Response was not between 200-299');
      const errorResponse = await response.json();
      console.log(`Error details: ${JSON.stringify(errorResponse)}`);
      return;
    }

    const data = await response.json();    
    console.log(`1. ${data}`)
    console.log(`2. ${JSON.stringify(data)}`)
  } catch (e) {
    console.error('An error occurred:', e);
  }
}

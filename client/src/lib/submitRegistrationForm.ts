import RegistrationForm from "@/types/registrationForm";

export default async function submitRegistrationForm(form: RegistrationForm) {
  const body = JSON.stringify(form);
  const response = await fetch('/api/register', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: body
  })

  if (response.ok) {
    const data = await response.json();    
  } else {
    console.log('Error. Response was not between 200-299');
  }
}

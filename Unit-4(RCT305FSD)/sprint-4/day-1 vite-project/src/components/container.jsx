import useInputValues from "../hooks/hook"; // Import the custom hook

export let Container = () => {
  let email = useInputValues(""); // Using the custom hook for email input
  let password = useInputValues(""); // Using the custom hook for password input

  function handleSubmit(e) {
    e.preventDefault(); // Prevent the default form submission
    console.log(email.value, password.value); 
    email.reset()
    password.reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        placeholder="email" 
        {...email} 
      />
      <input 
        placeholder="password" 
        {...password} 
      />
      <button type="submit">Submit Form</button>
    </form>
  );
};

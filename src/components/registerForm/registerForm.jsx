
"use client"
import { register } from "@/lib/action";
import styles from "./registerForm.module.css";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);
  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (

    <form className={styles.form} action={formAction}>
      <div className={styles.fieldRow}>
        <div className={styles.fieldGroup}>
          <label htmlFor="firstName">First Name</label>
          <input type="text" placeholder="First Name" name="firstName" />
        </div>
        <div className={styles.fieldGroup}>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" placeholder="Last Name" name="lastName" />
        </div>
      </div>
      <div className={styles.fieldRow}>
        <div className={styles.fieldGroup}>
          <label htmlFor="email">Email Address</label>
          <input type="email" placeholder="Email Address" name="email" />
        </div>
        <div className={styles.fieldGroup}>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="text" placeholder="Phone Number" name="phoneNumber" />
        </div>
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" name="password" />
      </div>
      <div className={styles.fieldGroup}>
        <label htmlFor="password">Confirm Password</label>
        <input type="password" placeholder="Password Again" name="passwordRepeat" />
      </div>
      <div className={styles.passwordOptions}>
        <input type="checkbox" id="check" style={{ marginRight: '5px' }} />
        <span htmlFor="check">I agree to all the terms & privacy policies</span>
      </div>


      <button>Create account</button>
      {state?.error && <div className={styles.error}>{state.error}</div>}
      <div className={styles.loginLink}>
        Already have an account? <Link href="/login"><b>Login</b></Link>
      </div>
      <button className={styles.googleButton}>Continue with Google</button>

    </form>
  )
};

export default RegisterForm;

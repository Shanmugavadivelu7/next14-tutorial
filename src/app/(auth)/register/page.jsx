import styles from "./register.module.css";
import RegisterForm from "@/components/registerForm/registerForm";


const RegisterPage = () => {
  return (
    
    <div className={styles.container}>
      {/* Left side with navy blue background */}
      <div className={styles.leftSide}>
        {/* Content for left side */}
        <img src="./logo1.svg" alt="SVG Image" className={styles.svgImage} />

      </div>
      {/* Right side with white background */}
      <div className={styles.rightSide}>
        <div className={styles.wrapper}>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

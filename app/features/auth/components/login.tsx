import { InputText } from "~/components/input-text";
import cn from "~/utils/cn";

const Login = () => {
  return (
    <div className={cn("max-w-md p-6 space-y-3 mx-auto shadow mt-24")}>
      <InputText placeholder="Nama anda" />
      <InputText placeholder="Kata Sandi" />
    </div>
  );
};

export default Login;

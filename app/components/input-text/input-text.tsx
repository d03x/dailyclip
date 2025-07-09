import cn from "~/utils/cn";
import styles from "./styles.module.scss";
import { X, XCircle } from "lucide-react";
const InputText = ({
  className,
  placeholder,
}: {
  placeholder?: string;
  className?: string;
}) => {
  return (
    <>
      <div
        className={cn(
          `w-full rounded-lg border transition-all duration-200
        bg-white text-gray-900 
        flex
        border-gray-300 hover:border-gray-400
        focus-within:outline-none focus-within:ring-2 focus-within:ring-gray-500 focus-within:border-transparent
        disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed
        dark:bg-gray-800 dark:border-gray-600 dark:text-white
        dark:hover:border-gray-500 dark:focus-within:ring-gray-600`,
          className
        )}
      >
        <input
          id="input-id" // match this with label's htmlFor
          className={`
        w-full outline-none px-3 text-sm py-1.5 bg-transparent
        placeholder-gray-400 dark:placeholder-gray-400
        disabled:cursor-not-allowed
      `}
          placeholder={placeholder}
        />
        <button className="mr-1.5 text-gray-500">
          <XCircle size={17} />
        </button>
      </div>
    </>
  );
};

export default InputText;

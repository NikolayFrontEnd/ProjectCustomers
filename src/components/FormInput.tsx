import style from "./FormInput.module.css";

interface FormInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
  icon?: string;
  onFocus?: () => void;
  onBlur?: () => void;
}

export default function FormInput({
  value,
  onChange,
  placeholder,
  type = "text",
  icon,
  onFocus,
  onBlur,
}: FormInputProps) {
  const handleFocus = () => {
    onFocus && onFocus();
  };

  const handleBlur = () => {
    onBlur && onBlur();
  };

  return (
    <div className={style.signin__forminputblock}>
      {icon && <img src={icon} className={style.signin__forminputicon} />}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={style.signin__forminput}
      />
    </div>
  );
}

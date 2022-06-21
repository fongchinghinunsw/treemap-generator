import styles from "./RowInput.module.scss";

type Props = {
  value: string;
  placeholder: string;
  onChange: (newValue: string) => void;
};

const RowInput: React.FC<Props> = ({ value, placeholder, onChange }) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      className={styles.rowInput}
      type="text"
      pattern="[0-9]"
      placeholder={placeholder}
      onChange={onChangeHandler}
      value={value}
    />
  );
};

export default RowInput;

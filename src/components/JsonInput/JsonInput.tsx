import styles from "./JsonInput.module.scss";

type Props = {
  value?: string;
  placeholder: string;
  onChange: (newValue: string) => void;
};

const JsonInput: React.FC<Props> = ({ value, placeholder, onChange }) => {
  // allow the user to press the tab character in <textarea> so
  // that the focus won't go to the next field when tab is clicked
  const onKeyDownHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Tab") {
      event.preventDefault();
      const TAB_SIZE = 4;
      document.execCommand("insertText", false, " ".repeat(TAB_SIZE));
    }
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <textarea
      className={styles["json-input"]}
      placeholder={placeholder}
      required
      onChange={onChangeHandler}
      onKeyDown={onKeyDownHandler}
      value={value}
    />
  );
};

export default JsonInput;

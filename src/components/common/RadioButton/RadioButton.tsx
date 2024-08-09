import React from "react";
import { Radio, Group } from "@mantine/core";
import classes from "./RadioButton.module.css";

interface RadioButtonProps {
  options: { value: string; label: string }[];
  name: string;
  label: string;
  description?: string; // description 속성 추가
  withAsterisk?: boolean; // withAsterisk 속성 추가
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  options,
  name,
  label,
  description,
  withAsterisk,
}) => {
  return (
    <Radio.Group
      className={classes.element}
      name={name}
      label={label}
      description={description}
      withAsterisk={withAsterisk}
    >
      <Group mt="xs" className={classes.group}>
        {options.map((option) => (
          <Radio
            key={option.value}
            value={option.value}
            label={option.label}
            className={classes.radio} // 여기에서 className 추가
          />
        ))}
      </Group>
    </Radio.Group>
  );
};

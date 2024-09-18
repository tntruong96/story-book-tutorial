import Button from "./Button";

export default {
  component: Button,
  //👇 Creates specific argTypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    //👇 Now all Button stories will be primary.
    primary: true,
  },
};

export const Primary = {
  args: {
    label: "Button",
    primary: true,
  },
};

export const PrimaryLongName = {
  args: {
    ...Primary.args,
    label: "Primary with a really long name",
  },
};

import { createConfig } from "@op-ent/unstyled-ui";

declare module "@op-ent/unstyled-ui" {
  interface CustomizableComponentsPropsOverride {
    button: {
      color:
        | "primary"
        | "secondary"
        | "neutral"
        | "danger"
        | "warning"
        | "success"
        | "info";
      size: "sm" | "md" | "lg";
      variant: "solid" | "outline" | "ghost";
    };
  }
}

export const { config, extendConfig } = createConfig({
  components: {
    button: {
      defaultProps: {
        color: "primary",
        size: "md",
        variant: "solid",
      },
      customProps: ["color", "size", "variant"],
    },
  },
});

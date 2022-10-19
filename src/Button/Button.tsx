import { defineComponent, PropType } from "vue";
import "uno.css";

export type ISize = "small" | "medium" | "large";
export type IColor = "white"
  | "black"
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purple"
  | "pink";

export const props = {
  size: {
    type: String as PropType<ISize>,
    default: "medium",
  },

  color: {
    type: String as PropType<IColor>,
    default: "blue",
  },

  round: {
    type: Boolean,
    default: false,
  },

  plain: {
    type: Boolean,
    default: false,
  },

  icon: {
    type: String,
    default: "",
  },
} as const;

export default defineComponent({
  name: "KButton",
  props,
  setup(props, { slots }) {
    const size = {
      small: {
        x: "2",
        y: "1",
        text: "sm",
      },
      medium: {
        x: "3",
        y: "1.5",
        text: "base",
      },
      large: {
        x: "4",
        y: "2",
        text: "lg",
      },
    };

    return () => (
      <button
        className={`
          py-${size[props.size].y} 
          px-${size[props.size].x} 
          ${props.round ? "rounded-full" : "rounded-lg"} 
          bg-${props.color}-${props.plain ? "100" : "500"} 
          border-${props.color}-500 
          cursor-pointer 
          border-solid 
          text-${props.plain ? props.color + "-500" : "white"} 
          text-${size[props.size].text} 
          mx-1 
          `}
      >
        {props.icon !== "" ? (
          <i className={`i-ic-baseline-${props.icon} p-3`}></i>
        ) : (
          ""
        )}
        {slots.default ? slots.default() : ""}
      </button>
    );
  },
});

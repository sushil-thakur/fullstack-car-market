import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";
import React from "react";

const Checkbox = React.forwardRef(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={`w-5 h-5 flex items-center justify-center border border-[rgb(0,123,255)] bg-white text-black 
      data-[state=checked]:bg-blue-500 data-[state=checked]:text-white transition-colors duration-150 ${className}`}
    {...props}
  >
    <CheckboxPrimitive.Indicator>
      <CheckIcon className="w-4 h-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));

export { Checkbox };
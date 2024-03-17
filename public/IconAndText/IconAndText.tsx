import React from "react";
import { TrailingIcon1 } from "../../public/TrailingIcon1";

interface Props {
  size: "large" | "extra-large" | "medium" | "small";
  icon: "leading-icon" | "top-icon" | "trailing-icon";
  className: any;
  override: JSX.Element;
  textClassName: any;
  text: string;
}

export const IconAndText = ({
  size,
  icon,
  className,
  override = <TrailingIcon1 className="!relative !w-[24px] !h-[24px]" />,
  textClassName,
  text = "Medium",
}: Props): JSX.Element => {
  return (
    <div
      className={`inline-flex items-center relative ${icon === "top-icon" ? "flex-col" : ""} ${
        ["leading-icon", "trailing-icon"].includes(icon)
          ? "gap-[8px]"
          : icon === "top-icon" && ["medium", "small"].includes(size)
          ? "gap-[4px]"
          : ""
      } ${className}`}
    >
      {["leading-icon", "top-icon"].includes(icon) && (
        <>
          {override}
          <div
            className={`w-fit text-text-normal whitespace-nowrap relative ${
              ["extra-large", "large"].includes(size) ? "font-base-l" : "font-components-normal-label"
            } ${icon === "leading-icon" && size === "small" ? "mt-[-1.00px]" : ""} ${
              ["extra-large", "large"].includes(size)
                ? "tracking-[var(--base-l-letter-spacing)]"
                : "tracking-[var(--components-normal-label-letter-spacing)]"
            } ${
              ["extra-large", "large"].includes(size)
                ? "text-[length:var(--base-l-font-size)]"
                : "text-[length:var(--components-normal-label-font-size)]"
            } ${
              ["extra-large", "large"].includes(size)
                ? "[font-style:var(--base-l-font-style)]"
                : "[font-style:var(--components-normal-label-font-style)]"
            } ${
              ["extra-large", "large"].includes(size)
                ? "font-[number:var(--base-l-font-weight)]"
                : "font-[number:var(--components-normal-label-font-weight)]"
            } ${
              ["extra-large", "large"].includes(size)
                ? "leading-[var(--base-l-line-height)]"
                : "leading-[var(--components-normal-label-line-height)]"
            } ${textClassName}`}
          >
            {size === "small" && <>Small</>}

            {size === "medium" && <>{text}</>}

            {size === "large" && <>Large</>}

            {size === "extra-large" && <>Extra Large</>}
          </div>
        </>
      )}

      {icon === "trailing-icon" && (
        <>
          <div
            className={`w-fit text-text-normal whitespace-nowrap relative ${
              ["extra-large", "large"].includes(size) ? "font-base-l" : "font-components-normal-label"
            } ${size === "small" ? "mt-[-1.00px]" : ""} ${
              ["extra-large", "large"].includes(size)
                ? "tracking-[var(--base-l-letter-spacing)]"
                : "tracking-[var(--components-normal-label-letter-spacing)]"
            } ${
              ["extra-large", "large"].includes(size)
                ? "text-[length:var(--base-l-font-size)]"
                : "text-[length:var(--components-normal-label-font-size)]"
            } ${
              ["extra-large", "large"].includes(size)
                ? "[font-style:var(--base-l-font-style)]"
                : "[font-style:var(--components-normal-label-font-style)]"
            } ${
              ["extra-large", "large"].includes(size)
                ? "font-[number:var(--base-l-font-weight)]"
                : "font-[number:var(--components-normal-label-font-weight)]"
            } ${
              ["extra-large", "large"].includes(size)
                ? "leading-[var(--base-l-line-height)]"
                : "leading-[var(--components-normal-label-line-height)]"
            }`}
          >
            {size === "small" && <>Small</>}

            {size === "medium" && <>{text}</>}

            {size === "large" && <>Large</>}

            {size === "extra-large" && <>Extra Large</>}
          </div>
          <TrailingIcon1
            className={
              size === "medium"
                ? "!relative !w-[24px] !h-[24px]"
                : size === "large"
                ? "!relative !w-[32px] !h-[32px]"
                : size === "extra-large"
                ? "!relative !w-[40px] !h-[40px]"
                : "!relative !w-[18px] !h-[18px]"
            }
          />
        </>
      )}
    </div>
  );
};

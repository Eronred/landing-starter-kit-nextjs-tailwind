import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";

type ButtonBaseProps = VariantProps<typeof buttonClasses>

type ButtonProps = ButtonBaseProps & {
    label: string;
    href?: string;
    className?: string;
};


const buttonClasses = cva(
    "w-full flex flex-row justify-center items-center text-center whitespace-nowrap sm:w-fit sm:px-8 py-3 text-lg rounded-full disabled:cursor-not-allowed disabled:opacity-50 focus:scale-95 transition-transform",
    {
        variants: {
            variant: {
                primary: [
                    " bg-primary text-white hover:bg-opacity-80 transition-colors",
                ],
                secondary: [
                    "bg-secondary text-text-light hover:bg-opacity-80 transition-colors",
                ],
            },
            size: {
                small: "text-xs px-3 h-7",
                medium: "text-sm px-4 h-8",
                nav: "text-[16px] px-4 h-10",
                large: "text-md px-6 h-12",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "medium",
        },
    });

export const Button = ({ label, href, variant, size, ...props }: ButtonProps) => {
    const classes = buttonClasses({ variant, size, className: props.className });

    if (href) {
        return (
            <Link
                href={href}
                className={classes}
                {...props}
            >
                {label}
            </Link>
        );
    }

    return (
        <button
            {...props}
            className={classes}>
            {label}
        </button>
    );
};





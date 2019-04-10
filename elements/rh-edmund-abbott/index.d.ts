declare global {
    namespace JSX {
        interface IntrinsicElements {
            'rh-edmund-abbott': EdmundAbbottProps;
        }
    }
}

interface EdmundAbbottProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    product: string;
    version: string;
}

export {};


import type { Config } from 'tailwindcss';

const config: Config = {

    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
            },
            colors: {
                amber: {
                    700: "#ff4f00"
                },
                state: {
                    100: "#ebe9df"
                }
            }
        },
    },
    plugins: [

    ],
};

export default config;
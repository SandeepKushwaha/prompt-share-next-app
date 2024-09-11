import Nav from '@components/Nav';
import Provider from '@components/Provider';

import '@styles/globals.dark.css';

export const metadata = {
    title: 'AI Prompts Share',
    description: 'Discover and share creative prompts with the community of AI Prompts Share',
}

/**
 * A functional component that renders the root layout of the application.
 *
 * @param {JSX.Element} children - The child elements to be rendered within the layout.
 * @return {JSX.Element} The JSX element representing the root layout.
 */
const RootLayout = ({ children }) => {
    return (
        <html leng="en">
            <body>
                <Provider>
                    <div className="main">
                        <div className="gradient" />
                    </div>
                    <main className="app">
                        <Nav />
                        { children }
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout;
import Head from 'next/head';
import { Box } from '@chakra-ui/layout';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
    <>
        <Head>
            <title>Real Estate</title>
        </Head>
        <Box>
            <header>
                <Navbar />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </Box>
    </>
);

export default Layout;
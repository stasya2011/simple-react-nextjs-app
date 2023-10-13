import Head from "next/head";
import Nav from "./Nav";

const MainContainer = ({children}) => {
    return (
        <>
            <Head>
                <meta name="keywords" content="Next.js react"></meta>
            </Head>
            <Nav />
            <div>
                {children}
            </div>
        </>
    );
};

export default MainContainer;

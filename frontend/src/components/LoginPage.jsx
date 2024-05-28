import styles from "../style";
import {Navbar} from "./";

const LoginPage = () => {
    return (
        <div className="bg-white w-full overflow-hidden">
            <div className={`${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
            <div className="font-20 text-black mt-[108px]">Login</div>
        </div>
    )
};

export default LoginPage;
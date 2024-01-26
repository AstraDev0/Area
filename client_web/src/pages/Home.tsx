import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContextProvider";
import NavBar from "../components/atoms/NavBar";
import MyTasks from "../components/area/MyTasks";
import '../styles/Home.css';
import { useEffect } from "react";

export function Home(_: HomeProps) {
    const { loggedIn } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loggedIn) {
            navigate("/");
        }
    }, [loggedIn, navigate]);

    const handleNavigateToArea = () => {
        navigate("/area");
    };

    return (
        <div>
            {loggedIn && (
                <>
                    <NavBar />
                    <div className="body-container">
                        <MyTasks />
                        <button className="round-button" onClick={handleNavigateToArea}>
                            +
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export interface HomeProps { }

export default Home;

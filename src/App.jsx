import Profile from "./components/Profile/Profile.jsx";
import UserData from "./constants/userData.json";
import './App.scss'

export default function App() {
    return (
        <>
            <Profile user={UserData.user}/>
        </>
    )
}


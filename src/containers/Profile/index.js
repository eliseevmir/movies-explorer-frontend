import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Account from "../../components/Account";
import UserInfo from "../../components/UserInfo";

function Profile() {

    return (
        <>
            <Header className="header header__color-white">
                <Navigation />
                <Account />
            </Header>
            <UserInfo />
        </>
    );
}

export default Profile;

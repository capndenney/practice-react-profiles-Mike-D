import Spacer from "./Spacer"

const ProfileCard = ({ profile }) => {
    return (
        <div className="profile-card">
            <h4>Name: {profile.profileName}</h4>
            <h5>Age: {profile.profileAge}</h5>
            <h5>Bio: {profile.profileBio}</h5>
            <Spacer />
        </div>
    )
}

export default ProfileCard
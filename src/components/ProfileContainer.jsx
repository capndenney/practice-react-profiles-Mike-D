import ProfileCard from "./ProfileCard"
import sampleProfiles from "../sampleData/sampleProfiles"

const ProfileContainer = () => {
    let profilesJSX = [...sampleProfiles].map((profile) => {
        return <ProfileCard profile={profile} />
    })

    return (
        <main className="profile-section">
            <h1>Profiles</h1>
            <div className="profile-card-container">{profilesJSX}</div>
        </main>
    )
}

export default ProfileContainer
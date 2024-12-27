 function Profile() {
    return ( 
          <>
        <h1> Profile Card chanlanges</h1>
        <ProfileCard
        name ="Tabrej"
        age = "23"
        greeting={
            <div>
                <strong> hi Tabrej how have you been ! </strong>
            </div>
        }
        >
        <p>Hobbies: Reading, playing chess</p>
        <p>Contact</p>
     </ProfileCard>


     <ProfileCard
        name ="Bod"
        age = "34"
        greeting={
            <div>
                <strong> hi Bod how have you been !</strong>
            </div>
        }
        >
        <p>Hobbies: Reading, playing chess</p>
        <p>Contact</p>
     </ProfileCard>
         </>
    )
}
export default Profile;


function ProfileCard({name,age, greeting, children }) {
    // here we do destructuring to get the props
    // we do as like this const {name,age, greeting, children } = props;
    // const {name,age, greeting, children } = props;
    return (
        <>
        <h2>Name: {name} </h2>
        <p>Age: {age} </p>
        <p> {greeting}</p>
        <div> {children} </div>
        </>
    )
}
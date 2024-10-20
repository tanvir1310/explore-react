export default function User({user}){
  console.log(user)
const {name, email} = user;
console.log(name)
    return(
      <div className="box">
        <h4>Name: {name}</h4>
        <p>Paragraph: {email}</p>
      </div>
      
    )
  }
  
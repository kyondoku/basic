import Avatar from "./Avatar";

export default function Profile({image, name, title, isNew}) {

    return (
        <div className="profile">
            {/* <img className="photo" 
                src={image} alt='avatar'/>
            {isNew && <span className="new">new</span>} */}
            <Avatar 
                image={image}
                isNew={isNew}
            />
            <h1>{name}</h1>
            <p>{title}</p>
        </div>
 
    )

}

// rfc
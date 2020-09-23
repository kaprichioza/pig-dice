import React from 'react'

export const Player = (props) => {
    const [name, setName] = React.useState(props.name);
    return (
        <div>
            <div>
                Player {props.id} {props.name} {props.score}
            </div>
            {props.name
                ? (<div> {name}</div>)
                : (<>
                    <input type="text" value={name} onChange={
                        (e) => setName(e.target.value)
                    }></input>
                    <button onClick={()=> props.onNameSaved(name)}>Pass name</button>
                </>)}
        </div>
    )
}

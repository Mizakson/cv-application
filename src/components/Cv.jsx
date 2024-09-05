export default function Cv({ onClick }) {
    
    return (
        <div className="display covered">
            <div className="paper"></div>
            <button className="edit" onClick={onClick}>Edit</button>  
        </div>
    )
}
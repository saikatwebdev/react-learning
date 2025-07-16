const Item = ({ name, description }) => {
    return (
        <div className="item">
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    );
}

export default Item;

function QueueDisplay( {queue, onUpdate, onRemove} ) {

    const getStatusColor = (status) => {
        switch(status) {
            case 'waiting': return "var(--warning)";
            case 'serving': return "var(--success)";
            case 'completed': return "var(--info)";
            default: return "var(--texty)";
        }
    }
    return(
        <div>
            <h2>Current Queue</h2>
            { 
                queue.length === 0 ? 
                (<p className="empty-queue"> No Customer Found </p>) : 
                (
                <div className="queue-list">
                    { queue.map((customerName) => (
                        <div className="queue-item" key={customerName.id}>
                            <div className="customer-info">
                                <h3>{customerName.name}</h3>
                                <p>{customerName.service}</p>
                                <span className="status" style={{color: getStatusColor(customerName.status)}}>
                                    {customerName.status}
                                </span>
                            </div>
                            <div className="actions">
                                {customerName.status === "waiting" && (
                                    <button 
                                    className="server-btn" 
                                    onClick={() => onUpdate(customerName.id, "serving")}>Serve</button>
                                )}
                                {customerName.status === "serving" && (
                                    <button 
                                    className="complete-btn" 
                                    onClick={() => onUpdate(customerName.id, "completed")}>Complete</button>
                                )}
                                <button
                                    className="remove-btn"
                                    onClick={() => onRemove(customerName.id)}>
                                        {" "}
                                        Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>) 
            } 

        </div>
    );
}

export default QueueDisplay;
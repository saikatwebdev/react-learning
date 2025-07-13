function TimeExplainer() {
    const toTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const fromTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
    return (
        <div className="time-explainer">
            <p>This is the current time: {fromTime} - {toTime}</p>
        </div>
    )
}

export default TimeExplainer;

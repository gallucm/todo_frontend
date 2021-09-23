
export const Loading = ({red}: any) => {
    return (
        <div className="loading">
            <div className={red ? "red-freeflix spinner-border spinner" : "spinner-border spinner"} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}
const Toast = ({ error, setError }) => {
    return (
        <div>
            <div class="toast-container position-fixed bottom-0 end-0 p-3">
                <div id="liveToast" class="toast show bg-danger" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header">
                        <strong class="me-auto">Bootstrap</strong>
                        <small>11 mins ago</small>
                        <button type="button" class="btn-close" onClick={() => setError(null)}></button>
                    </div>
                    <div class="toast-body">
                        {error}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Toast
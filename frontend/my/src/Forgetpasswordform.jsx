function Forgetpasswordform() {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 mt-5">
                        <h3>Password Recovery</h3>
                        <form method="post">
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter your email" required 
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Recover Password</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Forgetpasswordform;
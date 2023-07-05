function Changepasswordform() {
  return (
        <>
      <form method="post" action="/Loginform">

        <h3>Ready to Login</h3>

        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6 mt-5">
              <h3>Change Password</h3>
              <form>
                <div class="form-group">
                  <label for="currentPassword">Current Password</label>
                  <input type="password" class="form-control" id="currentPassword" placeholder="Enter current password" required />
                </div>
                <div class="form-group">
                  <label for="newPassword">New Password</label>
                  <input type="password" class="form-control" id="newPassword" placeholder="Enter new password" required />
                </div>
                <div class="form-group">
                  <label for="confirmPassword">Confirm New Password</label>
                  <input type="password" class="form-control" id="confirmPassword" placeholder="Confirm new password" required />
                </div>
                <button type="submit" class="btn btn-primary">Change Password</button>
              </form>
            </div>
          </div>
        </div>
        </form>
      </>
      )
}

      export default Changepasswordform;
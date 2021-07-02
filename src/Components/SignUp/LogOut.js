const LogOut = () => {
  return (
    <div>

      <button
        className="btn btn-danger logout"
        onClick={() => {
          sessionStorage.removeItem ('user');
          window.location.reload ();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default LogOut;

const Username = ({ userName, setUserName, setStartChat }) => {
  const submit = (event) => {
    event.preventDefault();
    setStartChat(true);
  };
  return (
    <div className="usernamebox">
      {" "}
      <form onSubmit={submit}>
        <label>
          Please input your desired username
          <input
            type="text"
            onChange={(e) => setUserName(e.currentTarget.value)}
            value={userName}
          />
          <input type="submit" value="Start Chat"></input>
        </label>
      </form>
    </div>
  );
};

export default Username;

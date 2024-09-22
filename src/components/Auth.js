import Cookies from "universal-cookie";
const cookies = new Cookies()

export const Auth = (props) =>{
    const { setIsAuth } = props;
    const usnames = async () => {
        try {
        let uname = document.getElementById("uname").value
        cookies.set("usname", uname)
        setIsAuth(true)
        } catch(err) {
            console.error(err)
        }
        window.location.reload();
    };

    return(
    <div className="auth">
        <input id="uname" placeholder="username"/>
        <button onClick={usnames}>Start</button>
    </div>
    )
}
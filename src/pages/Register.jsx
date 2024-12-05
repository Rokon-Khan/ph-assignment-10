import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../authprovider/AuthProvider";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Register = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const { createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);

    // reset error and status
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    setErrorMessage("");
    setSuccess(false);

    if (password.length < 6) {
      setErrorMessage("Password should be 6 characters or longer");
      return;
    }

    if (!regex.test(password)) {
      setErrorMessage(
        "At least one uppercase, one lowercase,and More Than 6 character"
      );
      return;
    }

    // create user
    createUser(email, password)
      .then((result) => {
        if (result.user) {
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
          })
            .then(() => {
              // Profile updated!
              navigate(location?.state ? location.state : "/");
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        }

        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSigWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div className="space-y-10">
      <Navbar></Navbar>
      <div className="flex flex-col md:w-3/4 lg:w-1/2 mx-auto p-6">
        <h2 className="text-3xl my-10 font-bold text-center">
          Register for Donation Campaign
        </h2>
        <form onSubmit={handleRegister}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              required
              name="name"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              required
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              required
              name="email"
              placeholder="Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              required
              name="password"
              placeholder="Password"
              className="input input-bordered"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="btn btn-xs absolute right-2 top-12"
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </button>
          </div>
          <div className="form-control mt-6 space-y-4">
            <button className="btn btn-success text-xl text-white font-bold">
              Register
            </button>
          </div>
          {errorMessage && <p className="text-red-600">{errorMessage}</p>}
          {success && <p className="text-green-600">Register is Successful.</p>}
        </form>
        <button
          onClick={handleSigWithGoogle}
          className="btn btn-full btn-success text-xl text-white font-bold my-4"
        >
          Register With Google
        </button>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link className="text-green-600 font-bold" to="/login">
            Login
          </Link>
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;

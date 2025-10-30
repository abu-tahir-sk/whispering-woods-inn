import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { signInUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email.includes("@")) return setError("Please enter a valid email");
    if (password.length < 6)
      return setError("Password must be at least 6 characters long");

    try {
      const result = await signInUser(email, password);
      console.log("User logged in:", result.user);
      navigate("/");
    } catch (err) {
      if (err.code === "auth/invalid-credential") {
        setError("Invalid email or password");
      } else {
        setError(err.message);
      }
    }
  };

  //  Google Login
  const handleGoogleLogin = async () => {
    setError("");
    try {
      const user = await googleSignIn();
      console.log("Google user:", user);
      navigate("/");
    } catch (err) {
      console.error(err);
      setError("Google sign-in failed. Try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md border border-gray-200">
        <h2 className="text-2xl font-semibold text-center text-[#8B1E1E] mb-6">
          Welcome Back
        </h2>

        {error && (
          <p className="text-red-500 bg-red-50 p-2 rounded-md text-sm text-center mb-3">
            {error}
          </p>
        )}

        {/* Email/Password Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#8B1E1E] hover:bg-[#6f1717] text-white py-2 rounded-lg font-medium transition-all"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="my-5 flex items-center justify-center">
          <div className="w-full h-px bg-gray-200"></div>
          <span className="px-3 text-gray-500 text-sm">or</span>
          <div className="w-full h-px bg-gray-200"></div>
        </div>

        {/*  Google Sign In Button */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition-all"
        >
          <FcGoogle size={22} />
          <span className="text-gray-700 font-medium">Continue with Google</span>
        </button>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-[#8B1E1E] font-medium">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
